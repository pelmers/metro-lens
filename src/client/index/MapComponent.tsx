import React from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { FeatureCollection } from "geojson";
import * as turf from "@turf/turf";

// @ts-ignore untyped module
import { DragCircleMode } from "mapbox-gl-draw-circle";

import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import {
  HIGHWAY_STATS_AREA_MAX_KM2,
  OVERPASS_STATS_AREA_MAX_KM2,
  wrapWithDefault,
} from "../../constants";
import {
  getHighways,
  getNatureAndParkAreas,
  getParkingAreas,
  getTransitCounts,
  getWateryAreas,
} from "../rpcClient";

import osmtogeojson from "osmtogeojson";
import {
  AllLoadingStats,
  DefaultStats,
  ErrorValue,
  MapStatsComponent,
  Props as MapStatsComponentProps,
  StatValue,
} from "./MapStatsComponent";
import { TXmlResult } from "../../rpc";
import {
  EmptyFeatureCollection,
  addDrawControlButton,
  clipLineSegmentsAtBorder,
  clipPolygonsAtBorder,
  estimateHighwayFeatureWidth,
  renderDrawMeasurements,
  splitFeatureCollection,
  unionPolygon,
} from "../mapUtils";
import { fetchPopulation } from "./fetchPopulation";
import { randomCityCenter } from "../../pickACity";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
  isLoading: boolean;
  stats: MapStatsComponentProps;
};

const MapStyles = {
  default: "mapbox://styles/pelmers/clkio1a3n00pm01qk9d17c5vv",
  satellite: "mapbox://styles/pelmers/cl8ilg939000u15o5hxcr1mjy",
};

const MapLayers = {
  SURFACE_PARKING_POLYGONS: {
    id: "surfaceParkingAreas",
    type: "fill" as const,
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.7,
    },
  },
  NATURE_AND_PARKS_POLYGONS: {
    id: "natureAndParks",
    type: "fill" as const,
    paint: {
      "fill-color": "green",
      "fill-opacity": 0.5,
    },
  },
  WATERY_FEATURES_POLYGONS: {
    id: "wateryFeatures",
    type: "fill" as const,
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  },
  WATERY_FEATURES_LINES: {
    id: "wateryFeaturesLines",
    type: "line" as const,
    paint: {
      "line-color": "blue",
      "line-opacity": 0.2,
      "line-width": {
        type: "exponential" as const,
        base: 1.5,
        stops: [
          [14, 1],
          [18, 15],
          [22, 130],
        ],
      },
    },
  },
  STREETS_FEATURES_LINES: {
    id: "streetsFeaturesLines",
    type: "line" as const,
    paint: {
      "line-color": "#b3b300",
      "line-opacity": 0.5,
      "line-width": {
        type: "exponential" as const,
        base: 1.5,
        stops: [
          [14, 1],
          [18, 15],
          [22, 130],
        ],
      },
    },
  },
  ROADS_FEATURES_LINES: {
    id: "roadsFeaturesLines",
    type: "line" as const,
    paint: {
      "line-color": "#b3b300",
      "line-opacity": 0.7,
      "line-width": {
        type: "exponential" as const,
        base: 1.5,
        stops: [
          [12, 0.5],
          [18, 22],
          [22, 220],
        ],
      },
    },
  },
  HIGHWAYS_FEATURES_LINES: {
    id: "highwaysFeaturesLines",
    type: "line" as const,
    paint: {
      "line-color": "orange",
      "line-opacity": 0.9,
      "line-width": {
        type: "exponential" as const,
        base: 1.5,
        stops: [
          [3, 0.8],
          [18, 32],
          [22, 320],
        ],
      },
    },
  },
  CYCLEWAYS_FEATURES_LINES: {
    id: "cyclewaysFeaturesLines",
    type: "line" as const,
    paint: {
      "line-color": "#006400",
      "line-opacity": 0.6,
      "line-width": {
        type: "exponential" as const,
        base: 1.5,
        stops: [
          [14, 0.5],
          [18, 14],
        ],
      },
    },
  },
};

const OverpassAreaTooBigValue: StatValue = {
  missing: `Selection too large (>${OVERPASS_STATS_AREA_MAX_KM2} km²)`,
};

const HighwayAreaTooBigValue: StatValue = {
  missing: `Selection too large (>${HIGHWAY_STATS_AREA_MAX_KM2} km²)`,
};

type HighwayStatsType = {
  busStops: StatValue;
  highwayLength: StatValue;
  cyclewayLength: StatValue;
  highwayArea: StatValue;
  cyclewayArea: StatValue;
};

function showTemporaryTooltip(options: {
  align: "left" | "right";
  timer: number;
  text: string;
  target: HTMLElement;
  top: number;
}) {
  const tooltip = document.createElement("div");
  tooltip.className = `tooltip-${options.align}`;
  tooltip.textContent = options.text;
  tooltip.style.top = `${options.top}px`;
  options.target.appendChild(tooltip);
  setTimeout(() => {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  }, options.timer);
}

const getTransitCountsStats = wrapWithDefault(
  { railStops: ErrorValue, totalTransitLines: ErrorValue },
  async (
    borders: FeatureCollection,
    areaKm2: number,
    assertUpdateId: () => void
  ): Promise<{ railStops: StatValue; totalTransitLines: StatValue }> => {
    if (areaKm2 > OVERPASS_STATS_AREA_MAX_KM2) {
      return {
        railStops: OverpassAreaTooBigValue,
        totalTransitLines: OverpassAreaTooBigValue,
      };
    }
    const { railStops, totalLines, query } = await getTransitCounts(
      borders as any
    );
    assertUpdateId();
    return {
      railStops: { value: railStops, units: "", query },
      totalTransitLines: { value: totalLines, units: "", query },
    };
  }
);

const fetchAndClassifyHighways = async (
  borders: FeatureCollection
): Promise<{
  busStops: FeatureCollection;
  streets: FeatureCollection;
  roads: FeatureCollection;
  highways: FeatureCollection;
  cycleways: FeatureCollection;
  query: string;
}> => {
  const allHighways = await getHighways(borders as any);
  const xmlObject = new DOMParser().parseFromString(
    allHighways.xml,
    "text/xml"
  );
  const geoJsons = osmtogeojson(xmlObject);
  const { linestrings, points } = splitFeatureCollection(
    geoJsons as turf.FeatureCollection
  );
  const result = {
    streets: EmptyFeatureCollection(),
    roads: EmptyFeatureCollection(),
    highways: EmptyFeatureCollection(),
    cycleways: EmptyFeatureCollection(),
  };
  for (const linestring of linestrings.features) {
    switch (linestring.properties.highway) {
      case "cycleway":
        result.cycleways.features.push(linestring);
        break;
      case "trunk":
      case "motorway":
      case "primary":
        result.highways.features.push(linestring);
        break;
      case "secondary":
      case "motorway_link":
      case "trunk_link":
        result.roads.features.push(linestring);
        break;
      case "service":
      case "tertiary":
      case "unclassified":
      case "living_street":
      case "residential":
      case "primary_link":
      case "secondary_link":
      case "tertiary_link":
        result.streets.features.push(linestring);
        break;
      default:
        if (
          linestring.properties.cycleway === "track" ||
          linestring.properties.cycleway === "separate"
        ) {
          result.cycleways.features.push(linestring);
        }
    }
  }
  // For each result value, clip lines at border
  for (const [key, value] of Object.entries(result)) {
    if (key === "busStops") continue;
    result[key as keyof typeof result] = clipLineSegmentsAtBorder(
      value as turf.FeatureCollection,
      borders as turf.FeatureCollection
    );
  }
  const busFeatures = points.features.filter(
    (p) => p.properties.highway === "bus_stop"
  );
  return {
    ...result,
    busStops: turf.featureCollection(busFeatures),
    query: allHighways.query,
  };
};

export default class MapComponent extends React.Component<Props, State> {
  map: mapboxgl.Map;
  updateId: number = 0;
  drawControl: MapboxDraw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
      polygon: true,
      trash: true,
    },
    modes: {
      ...MapboxDraw.modes,
      drag_circle: DragCircleMode,
    },
  });

  mapControl = new mapboxgl.NavigationControl({ visualizePitch: true });
  geocoderControl = new MapboxGeocoder({
    accessToken: this.props.apiKey,
    mapboxgl: mapboxgl,
  });

  mapDivRef: React.RefObject<HTMLDivElement> = React.createRef();
  satelliteSelectRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: State = {
    style: MapStyles.default,
    stats: DefaultStats(),
    isLoading: false,
  };

  constructor(props: Props) {
    super(props);
    if (props.initialState) {
      this.state = { ...this.state, ...props.initialState };
    }
  }

  async setMapSources() {
    await new Promise<void>((resolve) => {
      this.map.once("styledata", () => {
        for (const layer of Object.values(MapLayers)) {
          this.map.addSource(layer.id, {
            type: "geojson",
            data: EmptyFeatureCollection(),
          });
          this.map.addLayer({
            ...layer,
            source: layer.id,
          });
        }
        // Add layers for measurement rendering
        this.map.addSource("_measurements", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        });

        // measurements layer
        this.map.addLayer({
          id: "_measurements",
          source: "_measurements",
          type: "symbol",
          paint: {
            "text-color": "hsl(234, 100%, 32%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 2,
          },
          layout: {
            "text-field": "{label}",
            "text-size": 16,
          },
        });
        resolve();
      });
    });
  }

  async constructMap() {
    const center = randomCityCenter();
    this.map = new mapboxgl.Map({
      container: this.mapDivRef.current,
      style: this.state.style,
      accessToken: this.props.apiKey,
      center,
      zoom: 12,
    });

    this.map.addControl(this.geocoderControl, "top-left");
    this.map.addControl(this.mapControl);
    // Add geolocate control
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    this.map.addControl(this.drawControl);
    // TODO: the correct button isn't highlighted as active when clicked
    addDrawControlButton("/static/icons/circle.svg", () => {
      this.drawControl.changeMode("drag_circle");
    });

    this.map.on("draw.create", this.updateDrawing);
    this.map.on("draw.update", this.updateDrawing);
    this.map.on("draw.delete", this.updateDrawing);
    this.map.on("draw.render", () =>
      renderDrawMeasurements(this.map, this.drawControl.getAll())
    );

    const drawPolyButton = document.querySelector(
      ".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon"
    );
    const drawCircleButton = document.querySelector(
      ".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_circle"
    );
    showTemporaryTooltip({
      align: "right",
      timer: 16000,
      text: "Click to draw a polygon",
      target: drawPolyButton as HTMLElement,
      top: 0,
    });
    showTemporaryTooltip({
      align: "right",
      timer: 16000,
      text: "Click to draw a circle",
      target: drawCircleButton as HTMLElement,
      top: 30,
    });
    // Add the satellite select button as a child of the .mapboxgl-ctrl-top-left div
    const topLeftDiv = document.querySelector(".mapboxgl-ctrl-top-left");
    if (topLeftDiv) {
      topLeftDiv.appendChild(this.satelliteSelectRef.current);
    }
    this.satelliteSelectRef.current.style.display = "block";

    await this.setMapSources();
  }

  updateHighwayMapAndGetStats = wrapWithDefault(
    {
      busStops: ErrorValue,
      highwayLength: ErrorValue,
      cyclewayLength: ErrorValue,
      highwayArea: ErrorValue,
      cyclewayArea: ErrorValue,
    },
    async (
      borders: FeatureCollection,
      areaKm2: number,
      updateId: number
    ): Promise<HighwayStatsType> => {
      if (areaKm2 > HIGHWAY_STATS_AREA_MAX_KM2) {
        return {
          busStops: HighwayAreaTooBigValue,
          highwayLength: HighwayAreaTooBigValue,
          cyclewayLength: HighwayAreaTooBigValue,
          highwayArea: HighwayAreaTooBigValue,
          cyclewayArea: HighwayAreaTooBigValue,
        };
      }
      const { streets, roads, highways, cycleways, busStops, query } =
        await fetchAndClassifyHighways(borders);
      this.assertUpdateId(updateId);
      (
        this.map.getSource(MapLayers.STREETS_FEATURES_LINES.id) as GeoJSONSource
      ).setData(streets);
      (
        this.map.getSource(MapLayers.ROADS_FEATURES_LINES.id) as GeoJSONSource
      ).setData(roads);
      (
        this.map.getSource(
          MapLayers.HIGHWAYS_FEATURES_LINES.id
        ) as GeoJSONSource
      ).setData(highways);
      (
        this.map.getSource(
          MapLayers.CYCLEWAYS_FEATURES_LINES.id
        ) as GeoJSONSource
      ).setData(cycleways);
      const stats = {
        cyclewayLength: {
          value: 0,
          units: "km",
          query,
        },
        cyclewayArea: {
          value: 0,
          units: "km²",
          query,
        },
        highwayLength: {
          value: 0,
          units: "km",
          query,
        },
        highwayArea: {
          value: 0,
          units: "km²",
          query,
        },
        busStops: {
          value: busStops.features.length,
          units: "",
          query,
        },
      };
      for (const cycleway of cycleways.features) {
        const wayLength = turf.length(cycleway, { units: "kilometers" });
        stats.cyclewayLength.value += wayLength;
        stats.cyclewayArea.value +=
          (wayLength * estimateHighwayFeatureWidth(cycleway as turf.Feature)) /
          1000;
      }
      for (const highway of highways.features
        .concat(roads.features)
        .concat(streets.features)) {
        const wayLength = turf.length(highway, { units: "kilometers" });
        stats.highwayLength.value += wayLength;
        stats.highwayArea.value +=
          (wayLength * estimateHighwayFeatureWidth(highway as turf.Feature)) /
          1000;
      }
      return { ...stats };
    }
  );

  assertUpdateId = (id: number) => {
    if (id !== this.updateId) {
      throw new Error(`abort update for ${id}, new update is ${this.updateId}`);
    }
  };

  // TODO: put up a loading spinner that blocks the map while we wait for the stats to load
  updateDrawing = async (_evt: { type: string }) => {
    // TODO: if there are multiple polygons only update the one that was changed
    this.updateId++;
    const currentUpdateId = this.updateId;
    const data = this.drawControl.getAll() as FeatureCollection<turf.Polygon>;
    if (data.features.length == 0) {
      this.deleteFeatures();
      return;
    }
    // Since react batches state updates, if we updated with setState many times,
    // only the last one would be reflected. We don't know in advance the order and timing
    // so we keep a batch object that contains all stats so far, and use it as the new state each time.
    const currentBatchStats = AllLoadingStats();
    const assertUpdateId = () => this.assertUpdateId(currentUpdateId);
    const setCurrentBatchState = (isLoading: boolean = true) => {
      if (currentUpdateId !== this.updateId) return;
      this.setState({ stats: { ...currentBatchStats }, isLoading });
    };

    setCurrentBatchState();

    const area = {
      value: turf.area(data) / 1000000,
      units: "km²",
    };
    const perimeter = {
      value: turf.length(data, { units: "kilometers" }),
      units: "km",
    };
    currentBatchStats.area = area;
    currentBatchStats.perimeter = perimeter;
    setCurrentBatchState();

    const updateAreaFeature = wrapWithDefault(
      ErrorValue,
      async (
        overpassQueryFn: (data: any) => Promise<TXmlResult>,
        polygonLayerId: string,
        lineLayerId?: string
      ): Promise<StatValue> => {
        if (area.value > OVERPASS_STATS_AREA_MAX_KM2) {
          return OverpassAreaTooBigValue;
        }

        const areas = await overpassQueryFn(data);
        assertUpdateId();
        const xmlObject = new DOMParser().parseFromString(
          areas.xml,
          "text/xml"
        );
        const geoJsons = osmtogeojson(xmlObject);
        let { polygons, linestrings } = splitFeatureCollection(
          geoJsons as turf.FeatureCollection
        );
        polygons = clipPolygonsAtBorder(polygons, data);

        (this.map.getSource(polygonLayerId) as GeoJSONSource).setData(polygons);
        if (lineLayerId) {
          linestrings = clipLineSegmentsAtBorder(linestrings, data);
          (this.map.getSource(lineLayerId) as GeoJSONSource).setData(
            linestrings
          );
        }

        // TODO: for correctness we should take the union of all polygons before calculating area
        // otherwise we would double count the area of overlapping polygons
        // but this method is super super slow, there should be some faster way
        // const union = unionPolygon(polygons);
        const union = polygons;
        const areaValueM2 = turf.area(union ? union : polygons);

        return {
          value: areaValueM2 / 1000000,
          units: "km²",
          query: areas.query,
        };
      }
    );

    const updatePromises = [];
    updatePromises.push(
      ...[
        {
          key: "parkingArea" as const,
          id: MapLayers.SURFACE_PARKING_POLYGONS.id,
          fn: getParkingAreas,
          // TODO: include on-street parking in calculation
          // https://wiki.openstreetmap.org/wiki/Street_parking#Physical_properties
        },
        {
          key: "natureArea" as const,
          id: MapLayers.NATURE_AND_PARKS_POLYGONS.id,
          fn: getNatureAndParkAreas,
        },
        {
          key: "wateryArea" as const,
          id: MapLayers.WATERY_FEATURES_POLYGONS.id,
          lineId: MapLayers.WATERY_FEATURES_LINES.id,
          fn: getWateryAreas,
        },
      ].map(async ({ key, id, fn, lineId }) => {
        const value = await updateAreaFeature(fn, id, lineId);
        currentBatchStats[key] = value;
        setCurrentBatchState();
      })
    );
    updatePromises.push(
      fetchPopulation(data, area.value).then((value) => {
        currentBatchStats.population = value;
        setCurrentBatchState();
      })
    );
    updatePromises.push(
      this.updateHighwayMapAndGetStats(data, area.value, currentUpdateId).then(
        (stats) => {
          for (const [key, value] of Object.entries(stats)) {
            currentBatchStats[key as keyof typeof stats] = value;
          }
          setCurrentBatchState();
        }
      )
    );
    updatePromises.push(
      getTransitCountsStats(data as any, area.value, assertUpdateId).then(
        ({ railStops, totalTransitLines }) => {
          currentBatchStats.railStops = railStops;
          currentBatchStats.totalTransitLines = totalTransitLines;
          setCurrentBatchState();
        }
      )
    );
    try {
      await Promise.all(updatePromises);
      assertUpdateId();
    } catch (err) {
      console.error(err);
    }
    setCurrentBatchState(false);
  };

  deleteFeatures = () => {
    for (const layer of Object.values(MapLayers)) {
      (this.map.getSource(layer.id) as GeoJSONSource).setData(
        EmptyFeatureCollection()
      );
    }
    this.setState({
      stats: DefaultStats(),
    });
  };

  async componentDidMount() {
    await this.constructMap();
  }

  async componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>
  ) {
    if (this.state.style !== nextState.style) {
      this.map.setStyle(nextState.style);
      await this.setMapSources();
      await this.updateDrawing({ type: "stylechange" });
    }
  }

  render() {
    const styleClass =
      this.state.style === MapStyles.satellite
        ? "satellite-view"
        : "default-view";
    return (
      <div className={`map-container-container ${styleClass}`}>
        <div className="map-container-with-style-select">
          <div
            className="map-style-select mapboxgl-ctrl"
            ref={this.satelliteSelectRef}
          >
            <input
              type="checkbox"
              id="map-style-select"
              name="map-style-select"
              checked={this.state.style === MapStyles.satellite}
              onChange={(e) => {
                this.setState({
                  style: e.target.checked
                    ? MapStyles.satellite
                    : MapStyles.default,
                });
              }}
            />
            <label htmlFor="map-style-select">🛰️ Satellite</label>
          </div>
          <div className="map-container mapboxgl-ctrl" ref={this.mapDivRef} />
        </div>
        {/* TODO add a map legend, e.g. https://docs.mapbox.com/mapbox-gl-js/example/updating-choropleth/ */}
        <MapStatsComponent {...this.state.stats} />
      </div>
    );
  }
}

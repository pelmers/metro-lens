import React from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import * as turf from "@turf/turf";

import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { OVERPASS_STATS_AREA_MAX_KM2, wrapWithDefault } from "../../constants";
import {
  getNatureAndParkAreas,
  getParkingAreas,
  getWateryAreas,
} from "../rpcClient";

import osmtogeojson from "osmtogeojson";
import {
  AllLoadingStats,
  DefaultStats,
  ErrorValue,
  MapStatsComponent,
  Props as MapStatsComponentProps,
  OverpassAreaTooBigValue,
  StatValue,
} from "./MapStatsComponent";
import { FeatureCollection } from "@turf/turf";
import { TXmlResult } from "../../rpc";
import { unkinkPolygon } from "@turf/turf";
import {
  EmptyFeatureCollection,
  clipLineSegmentsAtBorder,
  clipPolygonsAtBorder,
  splitFeatureCollection,
  unionPolygon,
} from "../mapUtils";
import { fetchPopulation } from "./fetchPopulation";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
  stats: MapStatsComponentProps;
};

// TODO: create linestring versions of these layers
const MapLayers = {
  SURFACE_PARKING_POLYGONS: {
    id: "surfaceParkingAreas",
    type: "fill" as const,
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.5,
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
      "line-width": 2,
    },
  },
};

export default class MapComponent extends React.Component<Props, State> {
  map: mapboxgl.Map;
  drawControl: MapboxDraw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
      polygon: true,
      trash: true,
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    defaultMode: "draw_polygon",
  });

  mapControl = new mapboxgl.NavigationControl({ visualizePitch: true });
  geocoderControl = new MapboxGeocoder({
    accessToken: this.props.apiKey,
    mapboxgl: mapboxgl,
  });

  mapDivRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: State = {
    // use satellite style
    style: "mapbox://styles/mapbox/light-v11",
    stats: DefaultStats(),
  };

  constructor(props: Props) {
    super(props);
    if (props.initialState) {
      this.state = { ...this.state, ...props.initialState };
    }
  }

  async constructMap() {
    this.map = new mapboxgl.Map({
      container: this.mapDivRef.current,
      style: this.state.style,
      accessToken: this.props.apiKey,
      center: [-95.3698, 29.7604],
      zoom: 13,
    });

    this.map.addControl(this.geocoderControl);
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

    this.map.on("draw.create", this.updateDrawing);
    this.map.on("draw.update", this.updateDrawing);
    this.map.on("draw.delete", this.updateDrawing);

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
        resolve();
      });
    });
  }

  // TODO: put up a loading spinner that blocks the map while we wait for the stats to load
  updateDrawing = async (_evt: { type: string }) => {
    const data = this.drawControl.getAll() as FeatureCollection<turf.Polygon>;
    if (data.features.length == 0) {
      this.deleteFeatures();
      return;
    }
    for (const polygon of data.features) {
      polygon.geometry = unkinkPolygon(polygon).features[0].geometry;
    }
    // Since react batches state updates, if we updated with setstate many times,
    // only the last one would be reflected. We don't know in advance the order and timing
    // so we keep a batch object that contains all stats so far, and use it as the new state each time.
    const currentBatchStats = AllLoadingStats();
    this.setState({ stats: {...currentBatchStats} });

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
    this.setState({ stats: {...currentBatchStats} });

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

        // Calculate the total area of the features by taking the union then using turf.area
        // Note that we take the union first to avoid double counting accidentally overlapping features
        const union = unionPolygon(polygons);
        const areaValueM2 = union ? turf.area(union) : 0;

        return {
          value: areaValueM2 / 1000000,
          units: "km²",
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
        this.setState({ stats: {...currentBatchStats} });
      })
    );
    updatePromises.push(
      fetchPopulation(data, area.value).then((value) => {
        currentBatchStats.population = value;
        this.setState({ stats: {...currentBatchStats} });
      })
    );
    await Promise.all(updatePromises);
    this.setState({ stats: {...currentBatchStats} });
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
    }
  }

  render() {
    return (
      <div className="map-container-container">
        <div id="map-container" ref={this.mapDivRef} />
        {/* TODO add a map legend, e.g. https://docs.mapbox.com/mapbox-gl-js/example/updating-choropleth/ */}
        <MapStatsComponent {...this.state.stats} />
      </div>
    );
  }
}

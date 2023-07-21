import React from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import * as turf from "@turf/turf";

import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import {
  OVERPASS_STATS_AREA_LIMIT_KM2,
  wrapWithDefault,
} from "../../constants";
import { getNatureAndParkAreas, getParkingAreas } from "../rpcClient";

import osmtogeojson from "osmtogeojson";
import {
  DefaultStats,
  ErrorValue,
  MapStatsComponent,
  Props as MapStatsComponentProps,
  OverpassAreaTooBigValue,
  StatValue,
} from "./MapStatsComponent";
import { FeatureCollection, Geometry } from "geojson";
import { TXmlResult } from "../../rpc";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
  stats: MapStatsComponentProps;
};

const EmptyFeatureCollection: FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

const MapLayers = {
  SURFACE_PARKING: {
    id: "surfaceParkingAreas",
    type: "fill" as const,
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.5,
    },
  },
  NATURE_AND_PARKS: {
    id: "natureAndParks",
    type: "fill" as const,
    paint: {
      "fill-color": "green",
      "fill-opacity": 0.5,
    },
  },
};

// Take the union of all features with Polygon geometry in collection
// Can be null if no features have Polygon geometry
function unionPolygon(collection: FeatureCollection) {
  let union: turf.Feature<turf.Polygon | turf.MultiPolygon> | null = null;
  for (const feature of collection.features) {
    if (feature.geometry.type === "Polygon") {
      if (union) {
        union = turf.union(union, feature as turf.Feature<turf.Polygon>);
      } else {
        union = feature as turf.Feature<turf.Polygon>;
      }
    }
  }
  return union;
}

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
    style: "mapbox://styles/pelmers/cl8ilg939000u15o5hxcr1mjy",
    stats: DefaultStats,
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
            data: EmptyFeatureCollection,
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

  // TODO: put up a loading spinner and set up some kind of debounce in case user moves around the drawing quickly
  updateDrawing = async (_evt: { type: string }) => {
    const data = this.drawControl.getAll();
    if (data.features.length == 0) {
      this.deleteFeatures();
      return;
    }
    const area = {
      value: turf.area(data) / 1000000,
      units: "km²",
    };
    const perimeter = {
      value: turf.length(data, { units: "kilometers" }),
      units: "km",
    };

    const updateAreaFeature = wrapWithDefault(
      ErrorValue,
      async (
        mapLayerId: string,
        overpassQueryFn: (data: any) => Promise<TXmlResult>
      ): Promise<StatValue> => {
        if (area.value > OVERPASS_STATS_AREA_LIMIT_KM2) {
          return OverpassAreaTooBigValue;
        }

        const areas = await overpassQueryFn(data);
        const xmlObject = new DOMParser().parseFromString(
          areas.xml,
          "text/xml"
        );
        const geoJsons = osmtogeojson(xmlObject);

        (this.map.getSource(mapLayerId) as GeoJSONSource).setData(geoJsons);

        // Calculate the total area of the features by taking the union then using turf.area
        // Note that we take the union first to avoid double counting accidentally overlapping features
        const union = unionPolygon(geoJsons);
        const areaValueM2 = union ? turf.area(union) : 0;

        return {
          value: areaValueM2 / 1000000,
          units: "km²",
        };
      }
    );

    const [parkingArea, natureArea] = await Promise.all([
      updateAreaFeature(MapLayers.SURFACE_PARKING.id, getParkingAreas),
      updateAreaFeature(MapLayers.NATURE_AND_PARKS.id, getNatureAndParkAreas),
    ]);
    // TODO: all the other stats too
    this.setState({
      stats: {
        area,
        perimeter,
        natureArea,
        parkingArea,
      },
    });
  };

  deleteFeatures = () => {
    for (const layer of Object.values(MapLayers)) {
      (this.map.getSource(layer.id) as GeoJSONSource).setData(
        EmptyFeatureCollection
      );
    }
    this.setState({
      stats: DefaultStats,
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

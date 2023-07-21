import React from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import { OVERPASS_STATS_AREA_LIMIT_KM2, d } from "../../constants";
import { getParkingAreas } from "../rpcClient";

import osmtogeojson from "osmtogeojson";
import {
  MapStatsComponent,
  Props as MapStatsComponentProps,
  NoPolygonValue,
  OverpassAreaTooBigValue,
} from "./MapStatsComponent";
import { FeatureCollection, Geometry } from "geojson";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
  stats: MapStatsComponentProps;
};

// Unclipped with opacity 0.2
const UNCLIPPED_SURFACE_PARKING_SOURCE_ID = "unclippedSurfaceParkingAreas";
// Clipped with opacity 0.5
const SURFACE_PARKING_SOURCE_ID = "surfaceParkingAreas";

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

  mapDivRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: State = {
    // TODO: style selector
    style: "mapbox://styles/mapbox/streets-v11",
    stats: {
      area: NoPolygonValue,
      perimeter: NoPolygonValue,
      parkingPlaces: NoPolygonValue,
    },
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

    this.map.addControl(this.mapControl);
    this.map.addControl(this.drawControl);

    this.map.on("draw.create", this.updateDrawing);
    this.map.on("draw.update", this.updateDrawing);
    this.map.on("draw.delete", this.deleteFeatures);

    await new Promise<void>((resolve) => {
      this.map.once("styledata", () => {
        this.map.addSource(SURFACE_PARKING_SOURCE_ID, {
          type: "geojson",
        });
        this.map.addLayer({
          id: SURFACE_PARKING_SOURCE_ID,
          type: "fill",
          source: SURFACE_PARKING_SOURCE_ID,
          paint: {
            "fill-color": "red",
            "fill-opacity": 0.5,
          },
        });
        this.map.addSource(UNCLIPPED_SURFACE_PARKING_SOURCE_ID, {
          type: "geojson",
        });
        this.map.addLayer({
          id: UNCLIPPED_SURFACE_PARKING_SOURCE_ID,
          type: "fill",
          source: UNCLIPPED_SURFACE_PARKING_SOURCE_ID,
          paint: {
            "fill-color": "red",
            "fill-opacity": 0.2,
          },
        });
        resolve();
      });
    });
  }

  // TODO: put up a loading spinner and set up some kind of debounce in case user moves around the drawing quickly
  updateDrawing = async (e: { type: string }) => {
    const data = this.drawControl.getAll();
    if (data.features.length > 0) {
      const area = turf.area(data);
      const areaKm = area / 1000000;
      const perimeterKm = turf.length(data, { units: "kilometers" });
      // Print up to 2 decimal places.
      d(
        `Area: ${areaKm.toFixed(2)} km², Perimeter: ${perimeterKm.toFixed(
          2
        )} km`
      );
      const parkingStats = await this.updateParkingFeatures(data, areaKm);
      this.setState({
        stats: {
          area: {
            value: areaKm,
            units: "km²",
          },
          perimeter: {
            value: perimeterKm,
            units: "km",
          },
          ...parkingStats,
        },
      });
    }
  };

  updateParkingFeatures = async (
    data: FeatureCollection<Geometry, { [name: string]: any }>,
    areaKm: number
  ) => {
    if (areaKm > OVERPASS_STATS_AREA_LIMIT_KM2) {
      return {
        parkingPlaces: OverpassAreaTooBigValue,
      };
    }
    const parkingAreas = await getParkingAreas(data as any);
    const clippedXmlObject = new DOMParser().parseFromString(parkingAreas.clippedXml, "text/xml");
    const unclippedXmlObject = new DOMParser().parseFromString(parkingAreas.unclippedXml, "text/xml");
    const clippedGeoJsonAreas = osmtogeojson(clippedXmlObject);
    const unclippedGeoJsonAreas = osmtogeojson(unclippedXmlObject);
    (this.map.getSource(SURFACE_PARKING_SOURCE_ID) as GeoJSONSource).setData(
      clippedGeoJsonAreas
    );
    (this.map.getSource(UNCLIPPED_SURFACE_PARKING_SOURCE_ID) as GeoJSONSource).setData(
      unclippedGeoJsonAreas
    );
    return {
      parkingPlaces: {
        value: clippedGeoJsonAreas.features.length,
        units: "places",
      },
    };
  };

  deleteFeatures = () => {
    (this.map.getSource(SURFACE_PARKING_SOURCE_ID) as GeoJSONSource).setData({
      type: "FeatureCollection",
      features: [],
    });
    (this.map.getSource(UNCLIPPED_SURFACE_PARKING_SOURCE_ID) as GeoJSONSource).setData({
      type: "FeatureCollection",
      features: [],
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
        <MapStatsComponent {...this.state.stats} />
      </div>
    );
  }
}

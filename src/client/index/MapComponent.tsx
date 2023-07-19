import React from "react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import { d } from "../../constants";
import { getParkingAreas } from "../rpcClient";

import osmtogeojson from "osmtogeojson";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
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

  mapDivRef: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    // TODO: style selector
    style: "mapbox://styles/mapbox/streets-v11",
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
    // Add a source for the parking areas in red.

    this.map.on("draw.create", this.updateDrawing);
    this.map.on("draw.delete", this.updateDrawing);
    this.map.on("draw.update", this.updateDrawing);

    await new Promise<void>((resolve) => {
      this.map.once("styledata", () => {
        this.map.addSource("parkingAreas", {
          type: "geojson",
        });
        this.map.addLayer({
          id: "parkingAreas",
          type: "fill",
          source: "parkingAreas",
          paint: {
            "fill-color": "red",
            "fill-opacity": 0.5,
          },
        });
        resolve();
      });
    });
  }

  updateDrawing = async (e: { type: string }) => {
    d(e);
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
      const parkingAreas = await getParkingAreas(data as any);
      d(parkingAreas);
      // Render all of the type: "relation" areas on the map.
      (this.map.getSource("parkingAreas") as GeoJSONSource).setData(
        osmtogeojson(parkingAreas)
      );
    }
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
      </div>
    );
  }
}

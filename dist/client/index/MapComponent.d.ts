/// <reference types="mapbox__mapbox-gl-draw" />
import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Props as MapStatsComponentProps } from "./MapStatsComponent";
import { FeatureCollection, Geometry } from "geojson";
type Props = {
    apiKey: string;
    initialState?: Partial<State>;
};
type State = {
    style: string;
    stats: MapStatsComponentProps;
};
export default class MapComponent extends React.Component<Props, State> {
    map: mapboxgl.Map;
    drawControl: MapboxDraw;
    mapControl: mapboxgl.NavigationControl;
    mapDivRef: React.RefObject<HTMLDivElement>;
    state: State;
    constructor(props: Props);
    constructMap(): Promise<void>;
    updateDrawing: (e: {
        type: string;
    }) => Promise<void>;
    updateParkingFeatures: (data: FeatureCollection<Geometry, {
        [name: string]: any;
    }>, areaKm: number) => Promise<{
        parkingArea: import("./MapStatsComponent").StatValue;
    }>;
    deleteFeatures: () => void;
    componentDidMount(): Promise<void>;
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): Promise<void>;
    render(): React.JSX.Element;
}
export {};

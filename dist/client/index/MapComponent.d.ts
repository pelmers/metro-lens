/// <reference types="mapbox__mapbox-gl-draw" />
import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
type Props = {
    apiKey: string;
    initialState?: Partial<State>;
};
type State = {
    style: string;
};
export default class MapComponent extends React.Component<Props, State> {
    map: mapboxgl.Map;
    drawControl: MapboxDraw;
    mapControl: mapboxgl.NavigationControl;
    mapDivRef: React.RefObject<HTMLDivElement>;
    state: {
        style: string;
    };
    constructor(props: Props);
    constructMap(): Promise<void>;
    updateDrawing: (e: {
        type: string;
    }) => Promise<void>;
    componentDidMount(): Promise<void>;
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): Promise<void>;
    render(): React.JSX.Element;
}
export {};

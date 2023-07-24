/// <reference types="mapbox__mapbox-gl-draw" />
/// <reference types="mapbox__mapbox-gl-geocoder" />
import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { FeatureCollection } from "geojson";
import "./MapComponent.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Props as MapStatsComponentProps, StatValue } from "./MapStatsComponent";
type Props = {
    apiKey: string;
    initialState?: Partial<State>;
};
type State = {
    style: string;
    isLoading: boolean;
    stats: MapStatsComponentProps;
};
export default class MapComponent extends React.Component<Props, State> {
    map: mapboxgl.Map;
    drawControl: MapboxDraw;
    mapControl: mapboxgl.NavigationControl;
    geocoderControl: MapboxGeocoder;
    mapDivRef: React.RefObject<HTMLDivElement>;
    state: State;
    constructor(props: Props);
    setMapSources(): Promise<void>;
    constructMap(startingCenter?: [number, number]): Promise<void>;
    updateHighwayMapAndGetStats: (borders: FeatureCollection<import("geojson").Geometry, {
        [name: string]: any;
    }>, areaKm2: number) => Promise<{
        busStops: StatValue;
        highwayLength: StatValue;
        cyclewayLength: StatValue;
        highwayArea: StatValue;
        cyclewayArea: StatValue;
    }>;
    updateDrawing: (_evt: {
        type: string;
    }) => Promise<void>;
    deleteFeatures: () => void;
    componentDidMount(): Promise<void>;
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): Promise<void>;
    render(): React.JSX.Element;
}
export {};

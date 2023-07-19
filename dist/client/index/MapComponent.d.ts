import React from "react";
import mapboxgl from "mapbox-gl";
import "./MapComponent.css";
type Props = {
    apiKey: string;
    initialState?: Partial<State>;
};
type State = {
    style: string;
};
export default class MapComponent extends React.Component<Props, State> {
    map: mapboxgl.Map;
    mapDivRef: React.RefObject<HTMLDivElement>;
    state: {
        style: string;
    };
    constructor(props: Props);
    constructMap(): void;
    componentDidMount(): Promise<void>;
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): Promise<void>;
    render(): React.JSX.Element;
}
export {};

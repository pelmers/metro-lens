import React from "react";
import "./MapStatsComponent.css";
export type StatValue = {
    value: number;
    units: string;
    query?: string;
} | {
    missing: string;
};
export declare const NoPolygonValue: StatValue;
export declare const ErrorValue: StatValue;
export declare const LoadingValue: StatValue;
declare class DefaultProps {
    area: StatValue;
    perimeter: StatValue;
    population: StatValue;
    parkingArea: StatValue;
    natureArea: StatValue;
    wateryArea: StatValue;
    highwayLength: StatValue;
    cyclewayLength: StatValue;
    highwayArea: StatValue;
    cyclewayArea: StatValue;
    busStops: StatValue;
    totalTransitLines: StatValue;
    railStops: StatValue;
}
export interface Props extends DefaultProps {
}
export declare const DefaultStats: () => Props;
export declare const AllLoadingStats: () => Props;
type State = {
    inline: boolean;
    metric: boolean;
    density: boolean;
};
export declare class MapStatsComponent extends React.Component<Props, State> {
    containerRef: React.RefObject<HTMLDivElement>;
    state: State;
    valueToDisplay(value: StatValue, options?: {
        isEstimate: boolean;
    }): React.JSX.Element;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    render(): React.JSX.Element;
}
export {};

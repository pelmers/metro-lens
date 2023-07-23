import React from "react";
import "./MapStatsComponent.css";
export type StatValue = {
    value: number;
    units: string;
    documentation?: string;
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
export declare class MapStatsComponent extends React.Component<Props> {
    valueToDisplay(value: StatValue, options?: {
        isEstimate: boolean;
    }): string;
    render(): React.JSX.Element;
}
export {};

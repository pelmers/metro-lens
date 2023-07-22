import React from "react";
import "./MapStatsComponent.css";
export type StatValue = {
    value: number;
    units: string;
} | {
    missing: string;
};
export type Props = {
    area: StatValue;
    perimeter: StatValue;
    parkingArea: StatValue;
    natureArea: StatValue;
    wateryArea: StatValue;
};
export declare const NoPolygonValue: StatValue;
export declare const ErrorValue: StatValue;
export declare const LoadingValue: StatValue;
export declare const DefaultStats: Props;
export declare const AllLoadingStats: Props;
export declare const OverpassAreaTooBigValue: StatValue;
export declare class MapStatsComponent extends React.Component<Props> {
    render(): React.JSX.Element;
}

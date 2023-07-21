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
};
export declare const NoPolygonValue: StatValue;
export declare const OverpassAreaTooBigValue: StatValue;
export declare class MapStatsComponent extends React.Component<Props> {
    render(): React.JSX.Element;
}

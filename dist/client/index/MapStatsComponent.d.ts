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
};
export declare const MissingValue: StatValue;
export declare class MapStatsComponent extends React.Component<Props> {
    render(): React.JSX.Element;
}

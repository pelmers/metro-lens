import React from "react";
import { d } from "../../constants";

import "./MapStatsComponent.css";

// StatValue represents the value is either present, or it is missing for a given reason
export type StatValue =
  | {
      value: number;
      units: string;
    }
  | {
      missing: string;
    };

export type Props = {
  area: StatValue;
  perimeter: StatValue;
};

export const NoPolygonValue: StatValue = {
  missing: "Select a polygon",
};

export const AreaTooBigValue: StatValue = {
  missing: "Area too large",
};

function valueToDisplay(value: StatValue): string {
  if ("missing" in value) {
    return value.missing;
  } else {
    return `${value.value.toFixed(2)} ${value.units}`;
  }
}

export class MapStatsComponent extends React.Component<Props> {
  // Renders a div with unordered list of each stat
  render() {
    d(this.props);
    return (
      <div id="map-stats-container">
        <ul>
          <li>Area: {valueToDisplay(this.props.area)}</li>
          <li>Perimeter: {valueToDisplay(this.props.area)}</li>
        </ul>
      </div>
    );
  }
}

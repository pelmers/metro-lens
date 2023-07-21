import React from "react";
import { OVERPASS_STATS_AREA_LIMIT_KM2, d } from "../../constants";

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
  parkingArea: StatValue;
};

export const NoPolygonValue: StatValue = {
  missing: "Select a polygon",
};

export const OverpassAreaTooBigValue: StatValue = {
  missing: `Selection too large (${OVERPASS_STATS_AREA_LIMIT_KM2} km²)`,
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
    return (
      <div id="map-stats-container">
        <ul>
          <li>Area: {valueToDisplay(this.props.area)}</li>
          <li>Perimeter: {valueToDisplay(this.props.perimeter)}</li>
          <li>Parking Area: {valueToDisplay(this.props.parkingArea)}</li>
        </ul>
      </div>
    );
  }
}

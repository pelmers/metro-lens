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
  natureArea: StatValue;
  wateryArea: StatValue;
};

export const NoPolygonValue: StatValue = {
  missing: "Select a polygon",
};

export const ErrorValue: StatValue = {
  missing: "Error (see console)",
};

export const LoadingValue: StatValue = {
  missing: "Loading...",
};

export const DefaultStats: Props = {
  area: NoPolygonValue,
  perimeter: NoPolygonValue,
  parkingArea: NoPolygonValue,
  natureArea: NoPolygonValue,
  wateryArea: NoPolygonValue,
};

export const AllLoadingStats: Props = {
  area: LoadingValue,
  perimeter: LoadingValue,
  parkingArea: LoadingValue,
  natureArea: LoadingValue,
  wateryArea: LoadingValue,
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
  // TODO: a km/miles switch
  // Renders a div with unordered list of each stat
  render() {
    return (
      <div id="map-stats-container">
        <ul>
          <li>🗺️ Area: {valueToDisplay(this.props.area)}</li>
          <li>📏 Perimeter: {valueToDisplay(this.props.perimeter)}</li>
          <li>🅿️ Parking Area: {valueToDisplay(this.props.parkingArea)}</li>
          <li>🛣️️ Road Length: TODO</li>
          <li>🚲️️ Cycle Path Length: TODO</li>
          <li>🌳 Nature Area: {valueToDisplay(this.props.natureArea)}</li>
          <li>🚌 Bus Stops: TODO</li>
          <li>🚃 Rail Stations: TODO</li>
          <li>🚇 Transit Routes: TODO</li>
          <li>💦 Watery Area: {valueToDisplay(this.props.wateryArea)}</li>
        </ul>
      </div>
    );
  }
}

import React from "react";
import {
  OVERPASS_STATS_AREA_MAX_KM2,
  WORLDPOP_AREA_MINIMUM_KM2,
  numberForDisplay,
} from "../../constants";

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
  population: StatValue;
  perimeter: StatValue;
  parkingArea: StatValue;
  natureArea: StatValue;
  wateryArea: StatValue;
  highwayLength: StatValue;
  cyclewayLength: StatValue;
  // TODO: normalized density, i.e. population / (area - watery - nature)
};

export const NoPolygonValue: StatValue = {
  missing: "Draw a shape",
};

export const ErrorValue: StatValue = {
  missing: "Error (see console)",
};

export const LoadingValue: StatValue = {
  missing: "Loading...",
};

export const DefaultStats: () => Props = () => ({
  area: NoPolygonValue,
  perimeter: NoPolygonValue,
  population: NoPolygonValue,
  parkingArea: NoPolygonValue,
  natureArea: NoPolygonValue,
  wateryArea: NoPolygonValue,
  highwayLength: NoPolygonValue,
  cyclewayLength: NoPolygonValue,
});

export const AllLoadingStats: () => Props = () => ({
  area: LoadingValue,
  perimeter: LoadingValue,
  population: LoadingValue,
  parkingArea: LoadingValue,
  natureArea: LoadingValue,
  wateryArea: LoadingValue,
  highwayLength: LoadingValue,
  cyclewayLength: LoadingValue,
});

function valueToDisplay(value: StatValue): string {
  if ("missing" in value) {
    return value.missing;
  } else {
    return `${numberForDisplay(value.value)} ${value.units}`;
  }
}

// TODO: add a stats compare mode if multiple polygons are selected
export class MapStatsComponent extends React.Component<Props> {
  // TODO: a km/miles switch
  // Renders a div with unordered list of each stat
  render() {
    const { props } = this;
    return (
      <div id="map-stats-container">
        <ul>
          <li>🗺️ Area: {valueToDisplay(props.area)}</li>
          <li>📏 Perimeter: {valueToDisplay(props.perimeter)}</li>
          <li>🚻️️ Population: {valueToDisplay(props.population)}</li>
          <li>🅿️ Parking Area: {valueToDisplay(props.parkingArea)}</li>
          <li>🛣️️ Road Length: {valueToDisplay(props.highwayLength)}</li>
          <li>🚲️️ Cycle Paths: {valueToDisplay(props.cyclewayLength)}</li>
          <li>🌳 Nature Area: {valueToDisplay(props.natureArea)}</li>
          <li>🚌 Bus Stops: TODO</li>
          <li>🚃 Rail Stations: TODO</li>
          <li>🚇 Transit Routes: TODO</li>
          <li>💦 Watery Area: {valueToDisplay(props.wateryArea)}</li>
        </ul>
      </div>
    );
  }
}

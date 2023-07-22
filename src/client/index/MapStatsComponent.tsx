import React from "react";
import {
  OVERPASS_STATS_AREA_MAX_KM2,
  WORLDPOP_AREA_MINIMUM_KM2,
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

export const DefaultStats: () => Props = () => ({
  area: NoPolygonValue,
  perimeter: NoPolygonValue,
  population: NoPolygonValue,
  parkingArea: NoPolygonValue,
  natureArea: NoPolygonValue,
  wateryArea: NoPolygonValue,
});

export const AllLoadingStats: () => Props = () => ({
  area: LoadingValue,
  perimeter: LoadingValue,
  population: LoadingValue,
  parkingArea: LoadingValue,
  natureArea: LoadingValue,
  wateryArea: LoadingValue,
});

export const OverpassAreaTooBigValue: StatValue = {
  missing: `Selection too large (>${OVERPASS_STATS_AREA_MAX_KM2} km²)`,
};

export const PopulationAreaTooSmallValue: StatValue = {
  missing: `Selection too small (<${WORLDPOP_AREA_MINIMUM_KM2} km²)`,
};

function valueToDisplay(value: StatValue): string {
  if ("missing" in value) {
    return value.missing;
  } else {
    return `${value.value.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })} ${value.units}`;
  }
}

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
          <li>🛣️️ Road Length: TODO</li>
          <li>🚲️️ Cycle Path Length: TODO</li>
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

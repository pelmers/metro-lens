import React from "react";
import { numberForDisplay } from "../../constants";

import "./MapStatsComponent.css";

// StatValue represents the value is either present, or it is missing for a given reason
export type StatValue =
  | {
      value: number;
      units: string;
      documentation?: string;
    }
  | {
      missing: string;
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

class DefaultProps {
  area = NoPolygonValue;
  perimeter = NoPolygonValue;
  population = NoPolygonValue;
  parkingArea = NoPolygonValue;
  natureArea = NoPolygonValue;
  wateryArea = NoPolygonValue;
  highwayLength = NoPolygonValue;
  cyclewayLength = NoPolygonValue;
  highwayArea = NoPolygonValue;
  cyclewayArea = NoPolygonValue;
}

export interface Props extends DefaultProps {}

export const DefaultStats: () => Props = () => new DefaultProps();

export const AllLoadingStats: () => Props = () => {
  const props = new DefaultProps();
  for (const key of Object.keys(props)) {
    props[key as keyof Props] = LoadingValue;
  }
  return props;
};

// TODO: add a stats compare mode if multiple polygons are selected
// TODO: add a density toggle that changes all stats to per km2
export class MapStatsComponent extends React.Component<Props> {
  valueToDisplay(value: StatValue, options?: { isEstimate: boolean }): string {
    const isEstimate = options?.isEstimate ?? false;
    if ("missing" in value) {
      return value.missing;
    } else {
      return `${isEstimate ? "~" : ""}${numberForDisplay(value.value)} ${
        value.units
      }`;
    }
  }
  // TODO: a km/miles switch
  // Renders a div with unordered list of each stat
  render() {
    const { props } = this;
    return (
      <div id="map-stats-container">
        <ul>
          <li>🗺️ Area: {this.valueToDisplay(props.area)}</li>
          <li>📏 Perimeter: {this.valueToDisplay(props.perimeter)}</li>
          <li>🚻️️ Population: {this.valueToDisplay(props.population)}</li>
          <li>🅿️ Parking Area: {this.valueToDisplay(props.parkingArea)}</li>
          <li>🛣️️ Road Length: {this.valueToDisplay(props.highwayLength)}</li>
          <li>
            🚙️️ Road Area:{" "}
            {this.valueToDisplay(props.highwayArea, { isEstimate: true })}
          </li>
          <li>🚴‍♂️️️ Cycle Paths: {this.valueToDisplay(props.cyclewayLength)}</li>
          <li>
            🚲️️ Cycle Area:{" "}
            {this.valueToDisplay(props.cyclewayArea, { isEstimate: true })}
          </li>
          <li>🌳 Nature Area: {this.valueToDisplay(props.natureArea)}</li>
          <li>🚌 Bus Stops: TODO</li>
          <li>🚃 Rail Stations: TODO</li>
          <li>🚇 Transit Routes: TODO</li>
          <li>💦 Watery Area: {this.valueToDisplay(props.wateryArea)}</li>
        </ul>
      </div>
    );
  }
}

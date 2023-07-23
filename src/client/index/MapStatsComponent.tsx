import React from "react";
import ReactMarkdown from "react-markdown";

import { numberForDisplay } from "../../constants";

import "./MapStatsComponent.css";
import { ExpandableTableRow } from "./components/ExpandableTableRow";

// StatValue represents the value is either present, or it is missing for a given reason
export type StatValue =
  | {
      value: number;
      units: string;
      // The raw overpass ql query that was used to get this value, used to generate link to overpass turbo
      query?: string;
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
  busStops = NoPolygonValue;
  totalTransitLines = NoPolygonValue;
  railStops = NoPolygonValue;
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

type State = {
  inline: boolean;
  metric: boolean;
  density: boolean;
};

// TODO: add a stats compare mode if multiple polygons are selected
// TODO: add a density toggle that changes all stats to per km2
// TODO: add a inline toggle that moves the stats to the map and makes the background slightly transparent
export class MapStatsComponent extends React.Component<Props, State> {
  containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  state: State = {
    inline: false,
    metric: true,
    density: false,
  };

  valueToDisplay(
    value: StatValue,
    options?: { isEstimate: boolean }
  ): React.JSX.Element {
    const isEstimate = options?.isEstimate ?? false;
    if ("missing" in value) {
      return <span className="map-stats-missing-value">{value.missing}</span>;
    } else {
      // TODO: convert to metric/imperial based on state
      // TODO: convert to density based on state
      const text = `${isEstimate ? "~" : ""}${numberForDisplay(value.value)} ${
        value.units
      }`;
      return value.query ? (
        <a
          className="map-stats-linked-value"
          href={`https://overpass-turbo.eu/?Q=${encodeURIComponent(
            value.query
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <span className="map-stats-unlinked-value">{text}</span>
      );
    }
  }

  render() {
    const { props } = this;
    return (
      <div id="map-stats-container" ref={this.containerRef}>
        <table>
          <colgroup>
            <col style={{ width: "163px" }} />
            <col style={{ width: "calc(100% - 163px)" }} />
          </colgroup>
          <tbody>
            <ExpandableTableRow
              label="🗺️ Area"
              value={this.valueToDisplay(props.area)}
              description="Area of the drawn shape."
            />
            <ExpandableTableRow
              label="📏 Perimeter"
              value={this.valueToDisplay(props.perimeter)}
              description="Perimeter of the drawn shape."
            />
            <ExpandableTableRow
              label="👥 Population"
              value={this.valueToDisplay(props.population, {
                isEstimate: true,
              })}
              description={
                <ReactMarkdown linkTarget="_blank">
                  Estimated population within the drawn shape. Data source:
                  [WorldPop 2020](https://www.worldpop.org/).
                </ReactMarkdown>
              }
            />
            <ExpandableTableRow
              label="🅿️ Parking Area"
              value={this.valueToDisplay(props.parkingArea)}
              description="Total area of all dedicated parking amenities within the shape. Click number for data source."
            />
            <ExpandableTableRow
              label="🛣️️ Road Length"
              value={this.valueToDisplay(props.highwayLength)}
              description="Total length of all vehicle-accessible roads within the shape. Click number for data source."
            />
            <ExpandableTableRow
              label="🚙️️ Road Area"
              value={this.valueToDisplay(props.highwayArea, {
                isEstimate: true,
              })}
              description={
                <ReactMarkdown linkTarget="_blank">
                  Total area of all vehicle-accessible roads within the shape.
                  Estimate based on lane data of roads and [heuristics for road
                  width](https://en.wikipedia.org/wiki/Lane#Lane_width).
                </ReactMarkdown>
              }
            />
            <ExpandableTableRow
              label="🚴‍♂️️️ Cycle Paths"
              value={this.valueToDisplay(props.cyclewayLength)}
              description={
                <ReactMarkdown linkTarget="_blank">
                  Total length of all [dedicated cycle
                  paths](https://wiki.openstreetmap.org/wiki/Key:highway#When_cycleway_is_drawn_as_its_own_way_(see_Bicycle))
                  within the shape, does not include shared lanes on roads.
                  Click number for data source.
                </ReactMarkdown>
              }
            />
            <ExpandableTableRow
              label="🚲️️ Cycle Area"
              value={this.valueToDisplay(props.cyclewayArea, {
                isEstimate: true,
              })}
              description={
                <ReactMarkdown linkTarget="_blank">
                  Estimated total area of all dedicated cycle paths, not
                  including shared lanes on roads. Estimate based on [average
                  width of all labeled cycle
                  paths](https://taginfo.openstreetmap.org/keys/cycleway%3Awidth#overview).
                </ReactMarkdown>
              }
            />
            <ExpandableTableRow
              label="🌳 Nature Area"
              value={this.valueToDisplay(props.natureArea)}
              description="Total area of all natural features such as parks, forests, and recreation areas within the shape. Click number for data source."
            />
            <ExpandableTableRow
              label="🚌 Bus Stops"
              value={this.valueToDisplay(props.busStops)}
              description="Total number of bus stops within the shape. Click number for data source."
            />
            <ExpandableTableRow
              label="🚃 Rail Stations"
              value={this.valueToDisplay(props.railStops)}
              description="Total number of rail stations within the shape, including trains, subway, trams, and other light rail. Click number for data source."
            />
            <ExpandableTableRow
              label="🚇 Transit Routes"
              value={this.valueToDisplay(props.totalTransitLines)}
              description="Total number of transit routes contained in or passing through the shape, including bus, train, subway, tram, and light rail. Click number for data source."
            />
            <ExpandableTableRow
              label="💦 Watery Area"
              value={this.valueToDisplay(props.wateryArea)}
              description="Total area of all water features such as lakes, rivers, and reservoirs within the shape, not including oceans. Click number for data source."
            />
          </tbody>
        </table>
      </div>
    );
  }
}

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

export class MapStatsComponent extends React.Component<Props, State> {
  containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  state: State = {
    inline: false,
    metric: true,
    density: false,
  };

  valueToDisplay(
    stat: StatValue,
    options?: { isEstimate?: boolean; skipDensity?: boolean }
  ): React.JSX.Element {
    const isEstimate = options?.isEstimate ?? false;
    const skipDensity = options?.skipDensity ?? false;
    if ("missing" in stat) {
      return <span className="map-stats-missing-value">{stat.missing}</span>;
    } else {
      let { value, units } = stat;
      // Stats are given as metric by default
      if (!this.state.metric) {
        if (stat.units === "km²") {
          value *= 0.386102;
          units = "mi²";
        } else if (stat.units == "km") {
          value *= 0.621371;
          units = "mi";
        }
      }
      if (this.state.density && "value" in this.props.area && !skipDensity) {
        const areaKm2 = this.props.area.value;
        const areaMaybeMi2 = this.state.metric ? areaKm2 : areaKm2 * 0.386102;
        if (stat.units === "km²") {
          value = (stat.value / areaKm2) * 100;
          units = "%";
        } else {
          value = stat.value / areaMaybeMi2;
          units = stat.units + (this.state.metric ? "/km²" : "/mi²");
        }
      }
      const text = `${isEstimate ? "~" : ""}${numberForDisplay(
        value
      )} ${units}`;
      return stat.query ? (
        <a
          className="map-stats-linked-value"
          href={`https://overpass-turbo.eu/?Q=${encodeURIComponent(
            stat.query
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.inline === this.state.inline) {
      return;
    }
    // First remove from DOM
    if (this.containerRef.current?.parentElement) {
      // this.containerRef.current.parentElement.removeChild(
      //   this.containerRef.current
      // );
    }
    // If it is now inline, then move the container div to be a child of the bottom-left map control
    if (this.state.inline) {
      const mapControlContainer = document.querySelector(
        ".mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl"
      );
      if (mapControlContainer) {
        // Insert as first child
        mapControlContainer.insertBefore(
          this.containerRef.current!,
          mapControlContainer.firstChild
        );
      }
    } else {
      // Otherwise, move it to a sibling of the map container (child of map container container)
      const mapContainerContainer = document.querySelector(
        ".map-container-container"
      );
      if (mapContainerContainer) {
        mapContainerContainer.appendChild(this.containerRef.current!);
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <div
        id="map-stats-container"
        ref={this.containerRef}
        className={this.state.inline ? "map-stats-container-inline" : ""}
      >
        <table>
          <colgroup>
            <col style={{ width: "163px" }} />
            <col style={{ width: "calc(100% - 163px)" }} />
          </colgroup>
          <tbody>
            <ExpandableTableRow
              label="🗺️ Area"
              value={this.valueToDisplay(props.area, { skipDensity: true })}
              description="Area of the drawn shape."
            />
            <ExpandableTableRow
              label="📏 Perimeter"
              value={this.valueToDisplay(props.perimeter, {
                skipDensity: true,
              })}
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
              description={
                <ReactMarkdown linkTarget="_blank">
                  Total area of all [dedicated parking
                  amenities](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking)
                  within the shape. Shown in red on the map. Click number for
                  data source.
                </ReactMarkdown>
              }
            />
            <ExpandableTableRow
              label="🛣️️ Road Length"
              value={this.valueToDisplay(props.highwayLength)}
              description="Total length of all vehicle-accessible roads within the shape. Click number for data source. Shown in shades of yellow or orange on the map."
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
                  Shown in dark green on the map. Click number for data source.
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
              description="Total area of all natural features such as parks, forests, and recreation areas within the shape, shown in green on the map. Click number for data source."
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
              label="💦 Water Area"
              value={this.valueToDisplay(props.wateryArea)}
              description="Total area of all water features such as lakes, rivers, and reservoirs within the shape, not including oceans, shown with blue on the map. Click number for data source."
            />
          </tbody>
        </table>

        <div id="map-stats-controls">
          <input
            type="checkbox"
            checked={this.state.inline}
            onChange={(e) => this.setState({ inline: e.target.checked })}
          />
          <label>Inline</label>
          <input
            type="checkbox"
            checked={this.state.metric}
            onChange={(e) => this.setState({ metric: e.target.checked })}
          />
          <label>Metric</label>
          <input
            type="checkbox"
            checked={this.state.density}
            onChange={(e) => this.setState({ density: e.target.checked })}
          />
          <label>Density</label>
        </div>
      </div>
    );
  }
}

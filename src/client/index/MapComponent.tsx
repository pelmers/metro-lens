import React from "react";
import mapboxgl from "mapbox-gl";

import "./MapComponent.css";

type Props = {
  apiKey: string;
  initialState?: Partial<State>;
};
type State = {
  style: string;
};

export default class MapComponent extends React.Component<Props, State> {
  map: mapboxgl.Map;
  mapDivRef: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    // TODO: style selector
    style: "mapbox://styles/mapbox/streets-v11",
  };

  constructor(props: Props) {
    super(props);
    if (props.initialState) {
      this.state = { ...this.state, ...props.initialState };
    }
  }

  constructMap() {
    this.map = new mapboxgl.Map({
      container: this.mapDivRef.current,
      style: this.state.style,
      accessToken: this.props.apiKey,
    });
  }

  async componentDidMount() {
    this.constructMap();
  }

  async componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>
  ) {
    if (this.state.style !== nextState.style) {
      this.map.setStyle(nextState.style);
    }
  }

  render() {
    return (
      <div className="map-container-container">
        <div id="map-container" ref={this.mapDivRef} />
      </div>
    );
  }
}

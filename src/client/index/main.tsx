/**
 * Starting plan: show a map and a way to draw polygons
 * once a polygon is drawn let's show the following statistics:
 * area, perimeter
 * area of parks/green space
 * length + area of roads/highways
 * area of parking spaces
 * area of buildings
 * area of water
 * area of tree cover
 * number of bus stops
 * number of train stops
 * length of total bike paths
 * estimated population, population density
 * each of those can be layers that toggle and highlight on the map
 */

import React from "react";
import ReactDOM from "react-dom";
import { connect, getMapboxKey } from "../rpcClient";

function TitleComponent() {
  // TODO: add logo, into, etc.
  return <h1>Shitty World of Polygons</h1>;
}

function FooterComponent() {
  // TODO: links to about, contact, etc.
  return <h1>Fancy Footer</h1>;
}

// Render react-root app
async function main() {
  connect();
  // Import MapComponent dynamically for code splitting
  const [mapComponent, apiKey] = await Promise.all([
    import("./MapComponent"),
    getMapboxKey(),
  ]);
  ReactDOM.render(
    <>
      <TitleComponent />
      <mapComponent.default apiKey={apiKey} />
      <FooterComponent />
    </>,
    document.getElementById("react-root")
  );
}

main();

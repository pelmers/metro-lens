import React from "react";
import { createRoot } from "react-dom/client";
import { connectClient, getMapboxKey } from "../rpcClient";

function TitleComponent() {
  // TODO: add logo, intro, etc.
  return <h1>Shitty World</h1>;
}

function FooterComponent() {
  // TODO: links to data sources, about, contact etc.
  return <h1>Fancy Footer</h1>;
}

// Render react-root app
async function main() {
  connectClient();
  // Import MapComponent dynamically for code splitting
  const [mapComponent, apiKey] = await Promise.all([
    import("./MapComponent"),
    getMapboxKey(),
  ]);
  // render with createroot
  createRoot(document.getElementById("react-root")).render(
    <>
      <TitleComponent />
      <mapComponent.default apiKey={apiKey} />
      <FooterComponent />
    </>
  );
}

main();

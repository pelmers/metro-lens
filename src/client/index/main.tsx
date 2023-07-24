import React from "react";
import { createRoot } from "react-dom/client";
import { connectClient, getMapboxKey } from "../rpcClient";

function TitleComponent() {
  // Show logo and intro phrase, plus expandable usage steps
  // TODO: create an icon
  return (
    <div className="title-container">
      <div className="title">
        <h1>Metro Lens</h1>
      </div>
      <div className="subtitle">"yeah it's pretty cool" - #1 Reviewer</div>
    </div>
  );
}

function FooterComponent() {
  // Row of links to about, source, report bug, request feature
  // TODO: contribution option
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="https://pelmers.com/blog" target="_blank">
          About
        </a>
        <a href="https://github.com/pelmers/metro-lens" target="_blank">
          Source
        </a>
        <a href="https://github.com/pelmers/metro-lens/issues" target="_blank">
          Report Bug
        </a>
        <a href="https://github.com/pelmers/metro-lens/issues" target="_blank">
          Request Feature
        </a>
        <a
          href="https://github.com/pelmers/metro-lens/blob/main/Roadmap.md"
          target="_blank"
        >
          Roadmap
        </a>
      </div>
    </div>
  );
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

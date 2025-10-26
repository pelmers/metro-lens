import React from "react";
import Script from "next/script";
import { getMapboxKey } from "./index/queries";
import MapComponent from "./index/components/MapComponent";

import "../../static/css/index.css";

function TitleComponent() {
  // Show logo and intro phrase, plus expandable usage steps
  return (
    <>
      <div className="title-container">
        <div className="title">
          <h1>Metro Lens</h1>
        </div>
        <div className="subtitle">"Whoa super cool!!!" - #2 Reviewer</div>
      </div>
    </>
  );
}

function FooterComponent() {
  // Row of links to about, source, report bug, request feature
  // TODO: contribution option
  return (
    <div className="footer-container">
      <div className="footer-container-links">
        <a
          href="https://pelmers.com/metro-something-something/"
          target="_blank"
        >
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
        <a href="https://streetwarp.com/" target="_blank">
          Check out StreetWarp
        </a>
      </div>
    </div>
  );
}

export default function MainPage() {
  // render with createroot
  return (
    <>
      <TitleComponent />
      <MapComponent apiKey={getMapboxKey()} />
      <FooterComponent />
      <Script
        src="https://rubber.pelmers.com/api/script.js"
        data-site-id="6383569141a5"
        strategy="afterInteractive"
      />
    </>
  );
}

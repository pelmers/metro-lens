import React from "react";
import Script from "next/script";
import { getMapboxKey } from "./index/queries";
import MapComponent from "./index/components/MapComponent";

import "../../static/css/index.css";

function TitleComponent() {
  // Show logo and intro phrase, plus expandable usage steps
  // TODO: create an icon
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
      <div className="footer-links">
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
      <Script>
        {`!function(r,i){"use strict";var e,o=r.location,s=r.document,t=s.querySelector('[src*="'+i+'"]'),l=t&&t.getAttribute("data-domain"),p=r.localStorage.plausible_ignore;function c(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(r.phantom||r._phantom||r.__nightmare||r.navigator.webdriver)){if("true"==p)return c("localStorage flag");var a={};a.n=e,a.u=o.href,a.d=l,a.r=s.referrer||null,a.w=r.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var n=new XMLHttpRequest;n.open("POST",i+"/api/event",!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4==n.readyState&&t&&t.callback&&t.callback()}}}function n(){e!==o.pathname&&(e=o.pathname,a("pageview"))}try{var u,h=r.history;h.pushState&&(u=h.pushState,h.pushState=function(){u.apply(this,arguments),n()},r.addEventListener("popstate",n));var g=r.plausible&&r.plausible.q||[];r.plausible=a;for(var f=0;f<g.length;f++)a.apply(this,g[f]);"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){e||"visible"!==s.visibilityState||n()}):n()}catch(e){console.error(e),(new Image).src=i+"/api/error?message="+encodeURIComponent(e.message)}}(window,"https://plausible.pelmers.com");`}
      </Script>
    </>
  );
}

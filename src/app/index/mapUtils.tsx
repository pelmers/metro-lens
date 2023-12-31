import { FeatureCollection } from "geojson";
import cheap_ruler, { Points } from "cheap-ruler";

import * as turf from "@turf/turf";
import { GeoJSONSource } from "mapbox-gl";

// @ts-ignore untyped module
import turfSliceAtIntersection from "turf-line-slice-at-intersection";
import { numberForDisplay } from "../../constants";

type PolyFC = turf.FeatureCollection<turf.Polygon | turf.MultiPolygon>;

// nb. it is really annoying that this FeatureCollection type is duplicated
export function EmptyFeatureCollection(): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

// Split 1 feature collection into 3: polygons, linestrings, and points
export function splitFeatureCollection(collection: turf.FeatureCollection): {
  polygons: FeatureCollection<turf.Polygon | turf.MultiPolygon>;
  linestrings: FeatureCollection<turf.LineString | turf.MultiLineString>;
  points: FeatureCollection<turf.Point | turf.MultiPoint>;
} {
  const polygons = EmptyFeatureCollection() as turf.FeatureCollection<
    turf.Polygon | turf.MultiPolygon
  >;
  const linestrings = EmptyFeatureCollection() as turf.FeatureCollection<
    turf.LineString | turf.MultiLineString
  >;
  const points = EmptyFeatureCollection() as turf.FeatureCollection<
    turf.Point | turf.MultiPoint
  >;
  for (const feature of collection.features) {
    switch (feature.geometry.type) {
      case "Polygon":
      case "MultiPolygon":
        polygons.features.push(
          feature as turf.Feature<turf.Polygon | turf.MultiPolygon>
        );
        break;
      case "LineString":
      case "MultiLineString":
        linestrings.features.push(
          feature as turf.Feature<turf.LineString | turf.MultiLineString>
        );
        break;
      case "Point":
      case "MultiPoint":
        points.features.push(
          feature as turf.Feature<turf.Point | turf.MultiPoint>
        );
        break;
    }
  }
  return {
    polygons,
    linestrings,
    points,
  };
}

// Take the union of all features with Polygon geometry in collection
// Can be null if no features have Polygon geometry
export function unionPolygon(collection: FeatureCollection) {
  let union: turf.Feature<turf.Polygon | turf.MultiPolygon> | null = null;
  for (const feature of collection.features) {
    if (feature) {
      if (union) {
        union = turf.union(union, feature as turf.Feature<turf.Polygon>);
      } else {
        union = feature as turf.Feature<turf.Polygon>;
      }
    }
  }
  return union;
}

// Clip polygons with the given border collection of polygons.
// This is done by taking turf/intersect with each polygon against each border polygon
export function clipPolygonsAtBorders(
  featurePolygons: PolyFC,
  borders: turf.FeatureCollection
): PolyFC {
  const { polygons: borderPolygons } = splitFeatureCollection(borders);
  const clippedPolygons = EmptyFeatureCollection() as turf.FeatureCollection<
    turf.Polygon | turf.MultiPolygon
  >;
  for (const poly of featurePolygons.features) {
    const unionCollection = EmptyFeatureCollection() as PolyFC;
    unionCollection.features = borderPolygons.features.map((border) =>
      turf.intersect(poly, border)
    );
    const clipped = unionPolygon(unionCollection);
    if (clipped) {
      clippedPolygons.features.push(clipped);
    }
  }
  return clippedPolygons;
}

// Clip line strings at given border polygons and return a collection of line strings
// fully contained in at least one border polygon
// Slightly modified from https://gis.stackexchange.com/a/459122/227981 (added end check)
// nb. Apparently lineSplit is buggy: https://github.com/Turfjs/turf/issues/2288
// so instead using yarn add turf-line-slice-at-intersection
// suggested in: https://github.com/Turfjs/turf/issues/2288#issuecomment-1125563629
export function clipLineSegmentsAtBorder(
  featureLineSegments: turf.FeatureCollection,
  borders: turf.FeatureCollection
): turf.FeatureCollection<turf.LineString | turf.MultiLineString> {
  const { polygons: borderPolygons } = splitFeatureCollection(borders);
  const clippedLines = EmptyFeatureCollection() as turf.FeatureCollection<
    turf.LineString | turf.MultiLineString
  >;
  for (const lines of featureLineSegments.features) {
    const flattened = turf.flatten(lines);
    for (const line of flattened.features) {
      for (const border of borderPolygons.features) {
        // split line by polygon
        // const split = turf.lineSplit(line, border);
        const split = turfSliceAtIntersection(line, border);
        for (const part of split.features) {
          // check which parts have a start and end inside the polygon
          const start = turf.booleanPointInPolygon(
            turf.point(part.geometry.coordinates[0]),
            border
          );
          const end = turf.booleanPointInPolygon(
            turf.point(
              part.geometry.coordinates[part.geometry.coordinates.length - 1]
            ),
            border
          );
          if (start && end) {
            clippedLines.features.push(part);
          }
        }
      }
    }
  }
  return clippedLines;
}

// Renders a label measuring the distance of every line segment and the area of every polygon
// on the map, passed in as drawCollection. Lengths are placed on midpoints and areas at centroid.
// Includes labeling the length of every edge of every polygon.
// adapted from: https://github.com/mapbox/mapbox-gl-draw/issues/801#issuecomment-403360815
export function renderDrawMeasurements(
  map: mapboxgl.Map,
  drawCollection: FeatureCollection
  // TODO: option to render miles
) {
  const ruler = new cheap_ruler(map.getCenter().lat, "kilometers");
  const labelFeatures = [];
  // Extend features by adding a line-stringified version of all edges of all polygons
  const extendedFeatures = [...drawCollection.features];
  for (const feature of drawCollection.features) {
    if (
      feature.geometry.type === "Polygon" &&
      feature.geometry.coordinates.length > 0 &&
      feature.geometry.coordinates[0].length >= 2 &&
      // For circles we only show the area in the middle, since it is drawn with a lot of short line segments
      feature.properties.isCircle !== true
    ) {
      for (let i = 0; i < feature.geometry.coordinates[0].length - 1; i++) {
        const cur = feature.geometry.coordinates[0][i];
        const next = feature.geometry.coordinates[0][i + 1];
        if (!cur || !next) {
          continue;
        }
        const line = turf.lineString([cur, next]);
        extendedFeatures.push(line);
      }
    }
  }
  // If there are multiple polygons, label the center of each with its number
  const numberOfPolygons = extendedFeatures.filter(
    (f) => turf.getType(f) === "Polygon"
  ).length;
  let seenPolygons = 0;

  for (const feature of extendedFeatures) {
    if (!("coordinates" in feature.geometry)) {
      continue;
    }
    switch (turf.getType(feature)) {
      case "LineString":
        // label Lines
        const lineCoords = feature.geometry.coordinates as Points;
        if (lineCoords.length > 1) {
          const length = ruler.lineDistance(lineCoords);
          const label = numberForDisplay(length) + " km";
          const midpoint = ruler.along(lineCoords, length / 2);
          if (length < 0.001) {
            // A "line" is generated before a single point has been drawn by taking the current cursor position to itself,
            // so we filter that out here
            break;
          }
          labelFeatures.push(
            turf.point(midpoint, {
              type: "line",
              label,
            })
          );
        }
        break;
      case "Polygon":
        // label Polygons
        const polyCoords = feature.geometry.coordinates as Points[];
        if (polyCoords.length > 0 && polyCoords[0].length > 3) {
          const area = ruler.area(polyCoords);
          const prefix = numberOfPolygons > 1 ? `${seenPolygons + 1}: ` : "";
          const label = prefix + numberForDisplay(area) + " km²";
          labelFeatures.push(
            turf.point(
              turf.centroid(feature as turf.Feature).geometry.coordinates,
              {
                type: "area",
                label,
              }
            )
          );
        }
        seenPolygons++;
        break;
    }
  }
  const source = map.getSource("_measurements") as GeoJSONSource;
  if (source) {
    source.setData({
      type: "FeatureCollection",
      features: labelFeatures,
    });
  }
}

export function addDrawControlButton(iconPath: string, onClick: () => unknown) {
  const siblingSelector =
    ".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon";
  // Create a button with the given icon as a sibling of the selected polygon button
  const button = document.createElement("button");
  button.className = "mapbox-gl-draw_ctrl-draw-btn";
  button.classList.add("mapbox-gl-draw_circle");
  // Set padding: 3px on the button
  button.style.padding = "3px";
  button.innerHTML = `<span class="mapbox-gl-draw_icon"><img src="${iconPath}"></span>`;
  button.onclick = async () => {
    button.classList.add("active");
    await onClick();
  };
  const sibling = document.querySelector(siblingSelector);
  if (sibling) {
    sibling.parentElement?.insertBefore(button, sibling.nextSibling);
  } else {
    console.warn("Could not find sibling for draw control button");
  }
}

// Parse a length-type field from OSM into a meters number. If not possible return NaN.
// This includes formats such as 7'6", 8 km, 16 ft, etc.
// see: https://wiki.openstreetmap.org/wiki/Key:width
export function parseOsmLengthField(length: string): number {
  // TODO: actually check the uncommon length formats
  try {
    return Number.parseFloat(length);
  } catch (e) {
    return NaN;
  }
}

// Given a feature with property highway set, estimate a width for it in meters.
// This will use the width property if it's available, otherwise we will multiply the lanes
// property by a heuristic value depending on the type of highway.
// nb. This estimation is VERY ROUGH, mostly derived from https://en.wikipedia.org/wiki/Lane#Lane_width.
// e.g. it may underestimate in the U.S. and overestimate in Europe.
export function estimateHighwayFeatureWidth(feature: turf.Feature): number {
  if (!Number.isNaN(parseOsmLengthField(feature.properties.width))) {
    return parseOsmLengthField(feature.properties.width);
  }
  if (!Number.isNaN(parseOsmLengthField(feature.properties.est_width))) {
    return parseOsmLengthField(feature.properties.est_width);
  }
  let lanes = 2;
  let laneWidth = 3.5;
  let buffer = 0.5;
  switch (feature.properties.highway) {
    case "cycleway":
      lanes = 1;
      // average cycle path width globally: https://overpass-turbo.eu/s/1xSP
      laneWidth = 1.881;
      buffer = 0;
      break;
    case "trunk":
    case "motorway":
      laneWidth = 3.75;
      buffer = 3.3;
      break;
    case "primary":
      laneWidth = 3.5;
      buffer = 2;
      break;
    case "secondary":
    case "motorway_link":
    case "trunk_link":
      laneWidth = 3.35;
      buffer = 0.8;
      break;
    case "service":
    case "tertiary":
    case "residential":
    case "primary_link":
    case "secondary_link":
    case "tertiary_link":
      laneWidth = 3.1;
      buffer = 0.5;
      break;
    case "unclassified":
    case "living_street":
      laneWidth = 2.6;
      buffer = 0.1;
      break;
  }
  if (feature.properties.lanes) {
    try {
      lanes = parseInt(feature.properties.lanes);
    } catch (e) {
      console.warn("could not parse lanes property", feature.properties);
    }
  }

  // Heuristic for the width of a lane, plus some buffer, depending on highway type
  const width = buffer + lanes * laneWidth;
  // if nan, return 0 and print a warning
  if (Number.isNaN(width)) {
    console.warn("Could not estimate width for feature", feature);
    return 0;
  } else {
    return width;
  }
}

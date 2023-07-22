import { FeatureCollection } from "geojson";

import * as turf from "@turf/turf";

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
export function clipPolygonsAtBorder(
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
        const split = turf.lineSplit(line, border);
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

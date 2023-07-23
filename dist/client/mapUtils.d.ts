/// <reference types="mapbox-gl" />
import { FeatureCollection } from "geojson";
import * as turf from "@turf/turf";
type PolyFC = turf.FeatureCollection<turf.Polygon | turf.MultiPolygon>;
export declare function EmptyFeatureCollection(): FeatureCollection;
export declare function splitFeatureCollection(collection: turf.FeatureCollection): {
    polygons: FeatureCollection<turf.Polygon | turf.MultiPolygon>;
    linestrings: FeatureCollection<turf.LineString | turf.MultiLineString>;
    points: FeatureCollection<turf.Point | turf.MultiPoint>;
};
export declare function unionPolygon(collection: FeatureCollection): turf.helpers.Feature<turf.helpers.Polygon | turf.helpers.MultiPolygon, {
    [name: string]: any;
}>;
export declare function clipPolygonsAtBorder(featurePolygons: PolyFC, borders: turf.FeatureCollection): PolyFC;
export declare function clipLineSegmentsAtBorder(featureLineSegments: turf.FeatureCollection, borders: turf.FeatureCollection): turf.FeatureCollection<turf.LineString | turf.MultiLineString>;
export declare function renderDrawMeasurements(map: mapboxgl.Map, drawCollection: FeatureCollection): void;
export declare function addDrawControlButton(iconPath: string, onClick: () => unknown): void;
export {};

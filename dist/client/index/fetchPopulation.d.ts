import { FeatureCollection } from "@turf/turf";
import { StatValue } from "./MapStatsComponent";
export declare function sleep(ms: number): Promise<unknown>;
export declare const fetchPopulation: (borders: FeatureCollection<import("@turf/turf").Geometry | import("@turf/turf").GeometryCollection, {
    [name: string]: any;
}>, areaKm2: number) => Promise<StatValue>;

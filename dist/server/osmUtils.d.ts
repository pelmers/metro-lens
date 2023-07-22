import type { Position } from "@turf/turf";
export declare function osmiumSort(inputFile: string): Promise<void>;
/**
 * Save the given polygon coordinates to the given filename in Polygon Filter Format
 * described at https://wiki.openstreetmap.org/wiki/Osmosis/Polygon_Filter_File_Format
 */
export declare function savePolygonFormat(coords: Position[], filename: string): Promise<void>;
/**
 * Calls osmconvert on the input file with the given polygon file as a filter
 * saves the output to the given output file
 */
export declare function osmconvertFilterWithPolygon(inputFile: string, polygonFile: string, outputFile: string): Promise<void>;
export declare function osmconvertMergeXmlResults(inputContentses: string[]): Promise<string>;

// Import child process tools
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import type { Position } from "@turf/turf";
import { e } from "../constants";

async function execCommand(command: string): Promise<void> {
  await e(promisify(exec))(command);
}

export async function osmiumSort(inputFile: string): Promise<void> {
  const outputFile = inputFile + ".sorted.xml";
  const command = `osmium sort ${inputFile} -o ${outputFile}`;
  await execCommand(command);
  await promisify(fs.rename)(outputFile, inputFile);
}

/**
 * Save the given polygon coordinates to the given filename in Polygon Filter Format
 * described at https://wiki.openstreetmap.org/wiki/Osmosis/Polygon_Filter_File_Format
 */
export async function savePolygonFormat(
  coords: Position[],
  filename: string
): Promise<void> {
  const header = "custom_poly\narea\n";
  const footer = "\nEND";
  const polyContents =
    header + coords.map(([lng, lat]) => ` ${lng} ${lat}`).join("\n") + footer;
  await promisify(fs.writeFile)(filename, polyContents);
}

/**
 * Calls osmconvert on the input file with the given polygon file as a filter
 * saves the output to the given output file
 */
export async function osmconvertWithPolygon(
  inputFile: string,
  polygonFile: string,
  outputFile: string
): Promise<void> {
  const command = `osmconvert ${inputFile} -B=${polygonFile} -o=${outputFile}`;
  await execCommand(command);
}

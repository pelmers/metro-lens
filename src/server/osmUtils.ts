// Import child process tools
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import util from "util";
import path from "path";
import type { Position } from "@turf/turf";
import { d, e, t } from "../constants";
import { withTempFolder } from "./utils";

const NoResultsOsmXML = `
<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="Overpass API">
</osm>
`;

async function execCommand(command: string): Promise<void> {
  await e(t(promisify(exec), command))(command);
}

/**
 * Sort the given osm file in place using osmium
 */
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
export async function osmconvertFilterWithPolygon(
  inputFile: string,
  polygonFile: string,
  outputFile: string
): Promise<void> {
  const command = `osmconvert ${inputFile} -B=${polygonFile} -o=${outputFile}`;
  await execCommand(command);
}

/**
 * Merge the contents of multiple osm xml files using osmconvert, returns the result as a string
 */
export async function osmconvertMergeXmlResults(
  inputContentses: string[]
): Promise<string> {
  if (inputContentses.length === 0) {
    return NoResultsOsmXML;
  }
  if (inputContentses.length === 1) {
    return inputContentses[0];
  }
  return await withTempFolder(async (tempFolder) => {
    // Write each input to a file
    const inputFiles = await Promise.all(
      inputContentses.map(async (contents, i) => {
        const filename = path.join(tempFolder, `input${i}.xml`);
        await promisify(fs.writeFile)(filename, contents);
        await osmiumSort(filename);
        return filename;
      })
    );
    const outputFile = path.join(tempFolder, "output.xml");
    const command = `osmconvert ${inputFiles.join(" ")} -o=${outputFile}`;
    await execCommand(command);
    // Read output file and return it
    return await promisify(fs.readFile)(outputFile, "utf8");
  });
}

/**
 * Given osm xml output, clip all of the features to the given polygon and return the result xml as a string.
 * This calls osmconvert and osmium under the hood.
 */
export async function clipOutputToPolygon(
  osmXml: string,
  coords: Position[]
): Promise<string> {
  return await withTempFolder(async (tempFolder) => {
    // Subtract 1 from number of points because the first and last point are the same
    d(
      `Processing ${(osmXml.length / 1000).toFixed(
        2
      )} kb XML in ${tempFolder} with polygon of ${coords.length - 1} points...`
    );
    const xmlFile = path.join(tempFolder, "result.xml");
    const polygonFile = path.join(tempFolder, "polygon.poly");
    const outputFile = path.join(tempFolder, "output.xml");
    await util.promisify(fs.writeFile)(xmlFile, osmXml);
    await savePolygonFormat(coords, polygonFile);
    await osmiumSort(xmlFile);
    await osmconvertFilterWithPolygon(xmlFile, polygonFile, outputFile);
    const result = await util.promisify(fs.readFile)(outputFile, "utf-8");
    return result;
  });
}

// Import child process tools
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import type { Position } from "@turf/turf";
import { e, t } from "../constants";
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
  return await withTempFolder(async (tempFolder) => {
    // Write each input to a file
    const inputFiles = await Promise.all(
      inputContentses.map(async (contents, i) => {
        const filename = path.join(tempFolder, `input${i}.xml`);
        await promisify(fs.writeFile)(filename, contents);
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

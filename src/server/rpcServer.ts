import ws from "ws";
import path from "path";
import fs from "fs";
import util from "util";

import { RpcServer, WebsocketTransport } from "roots-rpc";
import { ServerCalls, TClippedAndUnclippedXml, wrapServerErrors } from "../rpc";
import { CLIENT_CALLS_SERVER_RPC_PREFIX, d } from "../constants";
import {
  FeatureCollection,
  Geometry,
  Polygon,
  Position,
  unkinkPolygon,
} from "@turf/turf";
import { queryOverpass } from "./queryOverpass";
import { withTempFolder } from "./utils";
import {
  osmconvertWithPolygon,
  osmiumSort,
  savePolygonFormat,
} from "./osmUtils";

const mapboxApiKey = process.env.MAPBOX_API_KEY;

export function createRpcServer(socket: ws) {
  const server = new RpcServer(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  wrapServerErrors(server);
  server.register(ServerCalls.GetMapboxApiKey, async () => mapboxApiKey);
  server.register(ServerCalls.GetParkingAreas, getParkingAreas);
  return server;
}

function getPolyFilter(coords: Position[]): string {
  return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}

async function getParkingAreas(i: any): Promise<TClippedAndUnclippedXml> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = unkinkPolygon(i as FeatureCollection<Polygon>);
  const polygon = input.features[0].geometry as Geometry;
  const coords = polygon.coordinates[0] as Position[];
  // Docs for osmconvert say the output should have:
  // objects  ordered  by  their  type:  first, all nodes, next, all ways, followed by all
  // relations. Within each of these sections, the objects section must be sorted by their id
  // in ascending order.
  const overpassql = `
    [out:xml][timeout:30];
    (
      nwr["amenity"="parking"](${getPolyFilter(coords)});
    );
      out body;
      >;
      out body qt;`;
  const unclippedXml = await queryOverpass(overpassql);
  const clippedXml = await withTempFolder(async (tempFolder) => {
    // Subtract 1 from number of points because the first and last point are the same
    d(
      `Processing ${(unclippedXml.length / 1000).toFixed(
        2
      )} kb XML in ${tempFolder} with polygon of ${coords.length - 1} points...`
    );
    const xmlFile = path.join(tempFolder, "result.xml");
    const polygonFile = path.join(tempFolder, "polygon.poly");
    const outputFile = path.join(tempFolder, "output.xml");
    await util.promisify(fs.writeFile)(xmlFile, unclippedXml);
    await savePolygonFormat(coords, polygonFile);
    await osmiumSort(xmlFile);
    await osmconvertWithPolygon(xmlFile, polygonFile, outputFile);
    const result = await util.promisify(fs.readFile)(outputFile, "utf-8");
    // TODO: Print elapsed time
    return result;
  });

  return { clippedXml, unclippedXml };
}

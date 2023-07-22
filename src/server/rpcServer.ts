import ws from "ws";

import { RpcServer, WebsocketTransport } from "roots-rpc";
import { ServerCalls, TXmlResult, wrapServerErrors } from "../rpc";
import { CLIENT_CALLS_SERVER_RPC_PREFIX, d } from "../constants";
import {
  FeatureCollection,
  Geometry,
  Polygon,
  Position,
  unkinkPolygon,
} from "@turf/turf";
import { queryOverpass } from "./queryOverpass";
import { clipOutputToPolygon, osmconvertMergeXmlResults } from "./osmUtils";

const mapboxApiKey = process.env.MAPBOX_API_KEY;

export function createRpcServer(socket: ws) {
  const server = new RpcServer(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  wrapServerErrors(server);
  server.register(ServerCalls.GetMapboxApiKey, async () => mapboxApiKey);
  server.register(ServerCalls.GetParkingAreas, getParkingAreas);
  server.register(ServerCalls.GetNatureAndParkAreas, getNatureAndParkAreas);
  server.register(ServerCalls.GetWateryAreas, getWateryAreas);
  return server;
}

function getPolyFilter(coords: Position[]): string {
  return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}

async function getClippedAreasWithQueryBuilder(
  i: any,
  queryBuilder: (coords: Position[]) => string
): Promise<TXmlResult> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = i as FeatureCollection<Polygon>;
  const xmlResults = [];
  for (const polygon of input.features) {
    const geo = unkinkPolygon(polygon).features[0].geometry;
    const coords = geo.coordinates[0] as Position[];
    const overpassql = queryBuilder(coords);
    let result = await queryOverpass(overpassql);
    result = await clipOutputToPolygon(result, coords);
    xmlResults.push(result);
  }

  return { xml: await osmconvertMergeXmlResults(xmlResults) };
}

async function getParkingAreas(i: any): Promise<TXmlResult> {
  return getClippedAreasWithQueryBuilder(
    i,
    (coords) => `
      [out:xml][timeout:30];
      (
        nwr["amenity"="parking"](${getPolyFilter(coords)});
      );
        out body;
        >;
        out body qt;`
  );
}

async function getNatureAndParkAreas(i: any): Promise<TXmlResult> {
  return getClippedAreasWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
      (
nwr[leisure=park](${filter});
nwr[natural=grassland](${filter});
nwr[landuse=recreation_ground](${filter});
nwr[boundary=national_park](${filter});
nwr[boundary=protected_area](${filter});
      );
        out body;
        >;
        out body qt;`;
  });
}

async function getWateryAreas(i: any): Promise<TXmlResult> {
  return getClippedAreasWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
  (
  nwr[waterway](${filter});
  nwr[natural=water](${filter});
  );
        out body;
        >;
        out body qt;`;
  });
}

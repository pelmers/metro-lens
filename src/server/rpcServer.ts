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
  circle,
  centroid,
} from "@turf/turf";
import { queryOverpass } from "./queryOverpass";
import { osmconvertMergeXmlResults } from "./osmUtils";

const mapboxApiKey = process.env.MAPBOX_API_KEY;

// TODO Question: do we even need the server? all these queries can be fetched on client side
export function createRpcServer(socket: ws) {
  const server = new RpcServer(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  wrapServerErrors(server);
  server.register(ServerCalls.GetMapboxApiKey, async () => mapboxApiKey);
  server.register(ServerCalls.GetParkingAreas, getParkingAreas);
  server.register(ServerCalls.GetNatureAndParkAreas, getNatureAndParkAreas);
  server.register(ServerCalls.GetWateryAreas, getWateryAreas);
  server.register(ServerCalls.GetHighways, getHighways);
  return server;
}

function getPolyFilter(coords: Position[]): string {
  return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}

async function getOsmResultsWithQueryBuilder(
  i: any,
  queryBuilder: (coords: Position[]) => string
): Promise<TXmlResult> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = i as FeatureCollection<Polygon>;
  // Pre-process the input polygons
  for (const polygon of input.features) {
    polygon.geometry = unkinkPolygon(polygon).features[0].geometry;
    // Simplify circles to 16 points for querying overpass to improve performance
    // overpass also has a low limit on the request length
    if (polygon.properties.isCircle === true) {
      polygon.geometry = circle(
        centroid(polygon),
        polygon.properties.radiusInKm,
        { steps: 16 }
      ).geometry;
    }
  }

  const xmlResults = [];
  for (const polygon of input.features) {
    const coords = polygon.geometry.coordinates[0] as Position[];
    const overpassql = queryBuilder(coords);
    const result = await queryOverpass(overpassql);
    xmlResults.push(result);
  }

  return { xml: await osmconvertMergeXmlResults(xmlResults) };
}

async function getParkingAreas(i: any): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(
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
  return getOsmResultsWithQueryBuilder(i, (coords) => {
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
  return getOsmResultsWithQueryBuilder(i, (coords) => {
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

async function getHighways(i: any): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
  (
  way[highway](${filter});
  );
        out body;
        >;
        out body qt;`;
  });
}

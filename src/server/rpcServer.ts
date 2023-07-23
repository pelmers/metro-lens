import ws from "ws";

import { RpcServer, WebsocketTransport } from "roots-rpc";
import {
  ServerCalls,
  TTransitCounts,
  TXmlResult,
  wrapServerErrors,
} from "../rpc";
import { CLIENT_CALLS_SERVER_RPC_PREFIX, d } from "../constants";
import {
  FeatureCollection,
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
  server.register(ServerCalls.GetTransitCounts, getTransitCounts);
  return server;
}

function getPolyFilter(coords: Position[]): string {
  return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}

// Modifies input in place to be friendlier to overpass
function prepareInput(input: FeatureCollection<Polygon>): void {
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
}

async function getOsmResultsWithQueryBuilder(
  i: any,
  queryBuilder: (coords: Position[]) => string
): Promise<TXmlResult> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = i as FeatureCollection<Polygon>;
  prepareInput(input);
  const xmlResults = [];
  let query;
  for (const polygon of input.features) {
    const coords = polygon.geometry.coordinates[0] as Position[];
    const overpassql = queryBuilder(coords);
    query = overpassql;
    const result = await queryOverpass(overpassql);
    xmlResults.push(result);
  }

  return { xml: await osmconvertMergeXmlResults(xmlResults), query };
}

type TNWRCounts = {
  nodes: number;
  ways: number;
  relations: number;
  query?: string;
};

async function getOsmCountResultWithQueryBuilder(
  i: any,
  queryBuilder: (coords: Position[]) => string
): Promise<TNWRCounts> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = i as FeatureCollection<Polygon>;
  prepareInput(input);

  const jsonResults = [];
  let query;
  for (const polygon of input.features) {
    const coords = polygon.geometry.coordinates[0] as Position[];
    const overpassql = queryBuilder(coords);
    const result = JSON.parse(await queryOverpass(overpassql));
    query = overpassql;
    jsonResults.push(result);
  }
  const result = { nodes: 0, ways: 0, relations: 0, query };
  for (const res of jsonResults) {
    const countElement = res.elements[0];
    result.nodes += Number.parseInt(countElement.tags.nodes);
    result.ways += Number.parseInt(countElement.tags.ways);
    result.relations += Number.parseInt(countElement.tags.relations);
  }
  return result;
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
nwr[leisure=nature_reserve](${filter});
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
  node[highway=bus_stop](${filter});
  );
        out body;
        >;
        out body qt;`;
  });
}

async function getTransitCounts(i: any): Promise<TTransitCounts> {
  const transitCounts = await getOsmCountResultWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
    [out:json][timeout:30];
    (
      relation[type=route][route=bus](${filter});
      relation[type=route][route=train](${filter});
      relation[type=route][route=tram](${filter});
      relation[type=route][route=subway](${filter});
      relation[type=route][route=ferry](${filter});
      relation[type=route][route=light_rail](${filter});
      relation[type=route][route=trolleybus](${filter});
      nw[railway=station](${filter});
      nw[railway=tram_stop](${filter});
    );
    out count;
    `;
  });
  return {
    totalLines: transitCounts.relations,
    railStops: transitCounts.nodes + transitCounts.ways,
    query: transitCounts.query,
  };
}

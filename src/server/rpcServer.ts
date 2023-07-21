import ws from "ws";

import { RpcServer, WebsocketTransport } from "roots-rpc";
import { ServerCalls, wrapServerErrors } from "../rpc";
import { CLIENT_CALLS_SERVER_RPC_PREFIX, d } from "../constants";
import {
  FeatureCollection,
  Geometry,
  Polygon,
  Position,
  unkinkPolygon,
} from "@turf/turf";
import { queryOverpass } from "./queryOverpass";

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

async function getParkingAreas(i: any): Promise<any> {
  // TODO: remove cast if i make better io-ts typing for turf
  const input = unkinkPolygon(i as FeatureCollection<Polygon>);
  const polygon = input.features[0].geometry as Geometry;
  const coords = (polygon.coordinates[0] as Position[]).map(
    ([lng, lat]) => `${lat} ${lng}`
  );
  const polyFilter = `poly:"${coords.join(" ")}"`;
  const overpassql = `
    [out:json][timeout:30];
    (
      nwr["amenity"="parking"](${polyFilter});
    );
      out body;
      >;
      out body qt;`;
  const result = await queryOverpass(overpassql);
  d(`Received ${result.elements.length} results`);
  return result;
}

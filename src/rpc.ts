import * as t from "io-ts";
import { RpcServer } from "roots-rpc";
import { e } from "./constants";
import { FeatureCollection, featureCollection } from "@turf/turf";

export function wrapServerErrors(server: RpcServer) {
  const oldRegister = server.register.bind(server);
  server.register = (call, func) =>
    oldRegister(call, e(func, { errorPrefix: call.name }));
}

function optional<X extends t.Mixed>(typ: X) {
  return t.union([t.null, t.undefined, typ]);
}

export const ServerCalls = {
  GetMapboxApiKey: () => ({
    i: t.null,
    o: t.string,
  }),
  GetParkingAreas: () => ({
    i: t.any,
    // TODO: figure out what does this return
    o: t.any,
  }),
};

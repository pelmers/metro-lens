import * as t from "io-ts";
import { RpcServer } from "roots-rpc";
import { e, t as timed } from "./constants";
import { FeatureCollection, featureCollection } from "@turf/turf";

export function wrapServerErrors(server: RpcServer) {
  const oldRegister = server.register.bind(server);
  server.register = (call, func) =>
    oldRegister(call, timed(e(func, { errorPrefix: call.name }), call.name));
}

function optional<X extends t.Mixed>(typ: X) {
  return t.union([t.null, t.undefined, typ]);
}

const ClippedAndUnclippedXml = t.type({
  clippedXml: t.string,
  unclippedXml: t.string,
});
export type TClippedAndUnclippedXml = t.TypeOf<typeof ClippedAndUnclippedXml>;

const XmlResult = t.type({
  xml: t.string,
});
export type TXmlResult = t.TypeOf<typeof XmlResult>;

export const ServerCalls = {
  GetMapboxApiKey: () => ({
    i: t.null,
    o: t.string,
  }),
  GetParkingAreas: () => ({
    i: t.any,
    o: XmlResult,
  }),
  GetNatureAndParkAreas: () => ({
    i: t.any,
    o: XmlResult,
  }),
  GetWateryAreas: () => ({
    i: t.any,
    o: XmlResult,
  }),
};

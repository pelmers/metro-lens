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

const PolygonCollectionInput = t.any;

const XmlResult = t.type({
  xml: t.string,
});
export type TXmlResult = t.TypeOf<typeof XmlResult>;

const TransitCounts = t.type({
  railStops: t.number,
  totalLines: t.number,
});
export type TTransitCounts = t.TypeOf<typeof TransitCounts>;

export const ServerCalls = {
  GetMapboxApiKey: () => ({
    i: t.null,
    o: t.string,
  }),
  GetParkingAreas: () => ({
    i: PolygonCollectionInput,
    o: XmlResult,
  }),
  GetNatureAndParkAreas: () => ({
    i: PolygonCollectionInput,
    o: XmlResult,
  }),
  GetWateryAreas: () => ({
    i: PolygonCollectionInput,
    o: XmlResult,
  }),
  GetHighways: () => ({
    i: PolygonCollectionInput,
    o: XmlResult,
  }),
  GetTransitCounts: () => ({
    i: PolygonCollectionInput,
    o: TransitCounts,
  }),
};

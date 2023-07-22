import * as t from "io-ts";
import { RpcServer } from "roots-rpc";
export declare function wrapServerErrors(server: RpcServer): void;
declare const ClippedAndUnclippedXml: t.TypeC<{
    clippedXml: t.StringC;
    unclippedXml: t.StringC;
}>;
export type TClippedAndUnclippedXml = t.TypeOf<typeof ClippedAndUnclippedXml>;
declare const XmlResult: t.TypeC<{
    xml: t.StringC;
}>;
export type TXmlResult = t.TypeOf<typeof XmlResult>;
export declare const ServerCalls: {
    GetMapboxApiKey: () => {
        i: t.NullC;
        o: t.StringC;
    };
    GetParkingAreas: () => {
        i: t.AnyC;
        o: t.TypeC<{
            xml: t.StringC;
        }>;
    };
    GetNatureAndParkAreas: () => {
        i: t.AnyC;
        o: t.TypeC<{
            xml: t.StringC;
        }>;
    };
    GetWateryAreas: () => {
        i: t.AnyC;
        o: t.TypeC<{
            xml: t.StringC;
        }>;
    };
};
export {};

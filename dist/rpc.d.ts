import * as t from "io-ts";
import { RpcServer } from "roots-rpc";
export declare function wrapServerErrors(server: RpcServer): void;
declare const ClippedAndUnclippedXml: t.TypeC<{
    clippedXml: t.StringC;
    unclippedXml: t.StringC;
}>;
export type TClippedAndUnclippedXml = t.TypeOf<typeof ClippedAndUnclippedXml>;
export declare const ServerCalls: {
    GetMapboxApiKey: () => {
        i: t.NullC;
        o: t.StringC;
    };
    GetParkingAreas: () => {
        i: t.AnyC;
        o: t.TypeC<{
            clippedXml: t.StringC;
            unclippedXml: t.StringC;
        }>;
    };
};
export {};

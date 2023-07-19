import * as t from "io-ts";
import { RpcServer } from "roots-rpc";
export declare function wrapServerErrors(server: RpcServer): void;
export declare const ServerCalls: {
    GetMapboxApiKey: () => {
        i: t.NullC;
        o: t.StringC;
    };
    GetParkingAreas: () => {
        i: t.AnyC;
        o: t.AnyC;
    };
};

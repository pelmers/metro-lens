import { TXmlResult } from "../rpc";
import { AnyJson, AsyncFN } from "roots-rpc/dist/rpcTypes";
export declare let getMapboxKey: AsyncFN<null, string>;
export declare let getParkingAreas: AsyncFN<AnyJson, TXmlResult>;
export declare let getNatureAndParkAreas: AsyncFN<AnyJson, TXmlResult>;
export declare let getWateryAreas: AsyncFN<AnyJson, TXmlResult>;
export declare let getHighways: AsyncFN<AnyJson, TXmlResult>;
export declare function connectClient(): void;

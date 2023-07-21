import { TClippedAndUnclippedXml } from "../rpc";
import { AnyJson, AsyncFN } from "roots-rpc/dist/rpcTypes";
export declare let getMapboxKey: AsyncFN<null, string>;
export declare let getParkingAreas: AsyncFN<AnyJson, TClippedAndUnclippedXml>;
export declare function connect(): void;

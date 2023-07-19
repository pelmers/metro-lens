export declare const DOMAIN = "devzone.pelmers.com";
export declare const WS_DOMAIN_NAME: string;
export declare const RPC_WS_PATH = "rpc";
export declare const CLIENT_CALLS_SERVER_RPC_PREFIX = "ccsrp";
export declare const d: (...args: unknown[]) => void;
export declare function getErrorMessage(e: unknown): string;
/**
 * Given async func, return new function with the same signature that wraps any errors func throws with a log
 */
export declare function e<TInput extends any[], TOutput>(func: (...args: TInput) => Promise<TOutput>, params?: {
    errorPrefix?: string;
}): (...args: TInput) => Promise<TOutput>;

export declare const DOMAIN = "devzone.pelmers.com";
export declare const WS_DOMAIN_NAME: string;
export declare const RPC_WS_PATH = "rpc";
export declare const CLIENT_CALLS_SERVER_RPC_PREFIX = "ccsrp";
export declare const OVERPASS_STATS_AREA_LIMIT_KM2 = 250;
export declare const d: (...args: unknown[]) => void;
export declare function getErrorMessage(e: unknown): string;
/**
 * Given async func, return new function with the same signature that wraps any errors func throws with a log
 */
export declare function e<TInput extends any[], TOutput>(func: (...args: TInput) => Promise<TOutput>, params?: {
    errorPrefix?: string;
}): (...args: TInput) => Promise<TOutput>;
/** Catches errors and returns a default value (also logs with e, above) */
export declare function wrapWithDefault<TInput extends any[], TOutput>(defaultValue: TOutput, func: (...args: TInput) => Promise<TOutput>): (...args: TInput) => Promise<TOutput>;
/** Like e, but using a timer */
export declare function t<TInput extends any[], TOutput>(func: (...args: TInput) => Promise<TOutput>, name?: string): (...args: TInput) => Promise<TOutput>;

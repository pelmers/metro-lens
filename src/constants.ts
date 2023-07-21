// TODO: update the domain when I have picked a final domain name!
export const DOMAIN = "devzone.pelmers.com";

export const WS_DOMAIN_NAME = `wss://${DOMAIN}`;

export const RPC_WS_PATH = "rpc";
export const CLIENT_CALLS_SERVER_RPC_PREFIX = "ccsrp";

export const OVERPASS_STATS_AREA_LIMIT_KM2 = 250;

const DEBUG_LOG = true;

export const d = DEBUG_LOG
  ? (...args: unknown[]) => console.log(...args)
  : (..._unused: unknown[]) => {};

export function getErrorMessage(e: unknown): string {
  if ((e as Error).message != null) {
    return (e as Error).message;
  }
  return "unknown error";
}

/**
 * Given async func, return new function with the same signature that wraps any errors func throws with a log
 */
export function e<TInput extends any[], TOutput>(
  func: (...args: TInput) => Promise<TOutput>,
  params: {
    errorPrefix?: string;
  } = {}
) {
  return async (...args: TInput) => {
    try {
      return await func(...args);
    } catch (e) {
      const prefix = params.errorPrefix ? params.errorPrefix + ": " : "";
      const message = `${prefix}${getErrorMessage(e)}`;
      d(`Error: ${message}`);
      throw e;
    }
  };
}

/** Like e, but using a timer */
export function t<TInput extends any[], TOutput>(
  func: (...args: TInput) => Promise<TOutput>,
  name?: string
) {
  return async (...args: TInput) => {
    const start = Date.now();
    try {
      return await func(...args);
    } finally {
      d(`Executing ${name || func.name} took ${Date.now() - start}ms`);
    }
  };
}
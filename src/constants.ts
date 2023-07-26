export const OVERPASS_STATS_AREA_MAX_KM2 = 1100;
export const HIGHWAY_STATS_AREA_MAX_KM2 = 300;
export const WORLDPOP_AREA_MINIMUM_KM2 = 4;
export const WORLDPOP_AREA_MAX_KM2 = 100000;

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
      console.error(`Error: ${message}`);
      throw e;
    }
  };
}

/** Catches errors and returns a default value (also logs with e, above) */
export function wrapWithDefault<TInput extends any[], TOutput>(
  defaultValue: TOutput,
  func: (...args: TInput) => Promise<TOutput>
) {
  return async (...args: TInput) => {
    try {
      return await e(func)(...args);
    } catch (_err) {
      return defaultValue;
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
      d(`${name || func.name}: ${Date.now() - start}ms`);
    }
  };
}

export function numberForDisplay(value: number) {
  return `${value.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}`;
}

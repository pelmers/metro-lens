import fetch from "node-fetch";
import { d, t } from "../constants";

const OVERPASS_INSTANCE_URL = "https://overpass-api.de/api/interpreter";

export const queryOverpass = (queryCode: string): Promise<string> =>
  t(async () => {
    d(`overpassql: ${queryCode}`);
    const url = `${OVERPASS_INSTANCE_URL}?data=${encodeURIComponent(
      queryCode
    )}`;
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }, "queryOverpass")();

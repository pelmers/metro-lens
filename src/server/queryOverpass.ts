import fetch from "node-fetch";
import { d } from "../constants";

const OVERPASS_INSTANCE_URL = "https://overpass-api.de/api/interpreter";

export async function queryOverpass(queryCode: string) {
  d(`Querying overpass with query code:\n${queryCode}`);
  const url = `${OVERPASS_INSTANCE_URL}?data=${encodeURIComponent(queryCode)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

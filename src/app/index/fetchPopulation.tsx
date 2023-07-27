import { Feature, FeatureCollection, Polygon } from "@turf/turf";
import {
  wrapWithDefault,
  t,
  WORLDPOP_AREA_MINIMUM_KM2,
  WORLDPOP_AREA_MAX_KM2,
} from "../../constants";
import { ErrorValue, StatValue } from "./components/MapStatsComponent";

type WorldPopResponse = {
  error: boolean;
  taskid: string;
  status: string;
  error_message: string;
};

type WorldPopTaskResponse = {
  error: boolean;
  error_message: string;
  status: string;
  data: {
    total_population: number;
  };
};

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Poll task id until it gives a result or given timeout is reached (in seconds)
async function pollTaskId(
  taskId: string,
  timeoutSeconds = 30
): Promise<number> {
  const start = Date.now();
  const taskUrl = "https://api.worldpop.org/v1/tasks/" + taskId;
  while (true) {
    const taskResponse = await fetch(taskUrl);
    const taskJson = (await taskResponse.json()) as WorldPopTaskResponse;
    if (taskJson.data && taskJson.data.total_population) {
      return taskJson.data.total_population;
    }
    if (taskJson.error) {
      throw new Error(taskJson.error_message);
    }
    await sleep(300);
    if (Date.now() - start > timeoutSeconds * 1000) {
      throw new Error("timeout polling worldpop response");
    }
  }
}

const PopulationAreaTooSmallValue: StatValue = {
  missing: `Selection too small (<${WORLDPOP_AREA_MINIMUM_KM2} km²)`,
};

const PopulationAreaTooLargeValue: StatValue = {
  missing: `Selection too large (<${WORLDPOP_AREA_MAX_KM2} km²)`,
};

export const fetchPopulation = t(
  wrapWithDefault(
    ErrorValue,
    async (border: Feature<Polygon>, areaKm2: number): Promise<StatValue> => {
      if (areaKm2 < WORLDPOP_AREA_MINIMUM_KM2) {
        return PopulationAreaTooSmallValue;
      }
      if (areaKm2 > WORLDPOP_AREA_MAX_KM2) {
        return PopulationAreaTooLargeValue;
      }
      const baseUrl =
        "https://api.worldpop.org/v1/services/stats?dataset=wpgppop&year=2020";
      const url = `${baseUrl}}&geojson=${JSON.stringify(border)}`;
      const response = await fetch(url);
      const json = (await response.json()) as WorldPopResponse;
      if (json.error) {
        throw new Error(json.error_message);
      }
      if (!json.taskid) {
        throw new Error("no task id returned from population api");
      }
      return {
        value: Math.round(await pollTaskId(json.taskid)),
        units: "🧍",
      };
    }
  ),
  "fetchPopulation"
);

import {
  Feature,
  Polygon,
  Position,
  unkinkPolygon,
  circle,
  centroid,
} from "@turf/turf";
import { t } from "../../constants";

const mapboxApiKey = process.env.MAPBOX_API_KEY;
const OVERPASS_INSTANCE_URL = "https://overpass-api.de/api/interpreter";

export type TXmlResult = {
  xml: string;
  query: string;
};

export type TTransitCounts = {
  totalLines: number;
  railStops: number;
  query: string;
};

// TODO: add a global daily request limit
export function getMapboxKey(): string {
  return mapboxApiKey;
}

function getPolyFilter(coords: Position[]): string {
  return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}

// Modifies input in place to be friendlier to overpass
function prepareInput(polygon: Feature<Polygon>): void {
  // Pre-process the input polygons
  polygon.geometry = unkinkPolygon(polygon).features[0].geometry;
  // Simplify circles to 16 points for querying overpass to improve performance
  // overpass also has a low limit on the request length
  if (polygon.properties.isCircle === true) {
    polygon.geometry = circle(
      centroid(polygon),
      polygon.properties.radiusInKm,
      { steps: 16 }
    ).geometry;
  }
}

async function getOsmResultsWithQueryBuilder(
  polygon: Feature<Polygon>,
  queryBuilder: (coords: Position[]) => string
): Promise<TXmlResult> {
  prepareInput(polygon);
  let query;
  const coords = polygon.geometry.coordinates[0] as Position[];
  const overpassql = queryBuilder(coords);
  query = overpassql;
  return { xml: await queryOverpass(overpassql), query };
}

type TNWRCounts = {
  nodes: number;
  ways: number;
  relations: number;
  query?: string;
};

async function getOsmCountResultWithQueryBuilder(
  polygon: Feature<Polygon>,
  queryBuilder: (coords: Position[]) => string
): Promise<TNWRCounts> {
  // TODO: remove cast if i make better io-ts typing for turf
  prepareInput(polygon);

  const coords = polygon.geometry.coordinates[0] as Position[];
  const query = queryBuilder(coords);
  const jsonResult = JSON.parse(await queryOverpass(query));
  const result = { nodes: 0, ways: 0, relations: 0, query };
  const countElement = jsonResult.elements[0];
  result.nodes += Number.parseInt(countElement.tags.nodes);
  result.ways += Number.parseInt(countElement.tags.ways);
  result.relations += Number.parseInt(countElement.tags.relations);
  return result;
}

export async function getParkingAreas(
  i: Feature<Polygon>
): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(
    i,
    (coords) => `
      [out:xml][timeout:30];
      (
        nwr["amenity"="parking"](${getPolyFilter(coords)});
      );
        out body;
        >;
        out body qt;`
  );
}

export async function getNatureAndParkAreas(
  i: Feature<Polygon>
): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
      (
nwr[leisure=park](${filter});
nwr[natural=grassland](${filter});
nwr[landuse=recreation_ground](${filter});
nwr[boundary=national_park](${filter});
nwr[leisure=nature_reserve](${filter});
      );
        out body;
        >;
        out body qt;`;
  });
}

export async function getWateryAreas(i: Feature<Polygon>): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
  (
  nwr[waterway](${filter});
  nwr[natural=water](${filter});
  );
        out body;
        >;
        out body qt;`;
  });
}

export async function getHighways(i: Feature<Polygon>): Promise<TXmlResult> {
  return getOsmResultsWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
      [out:xml][timeout:30];
  (
  way[highway](${filter});
  node[highway=bus_stop](${filter});
  );
        out body;
        >;
        out body qt;`;
  });
}

export async function getTransitCounts(
  i: Feature<Polygon>
): Promise<TTransitCounts> {
  const transitCounts = await getOsmCountResultWithQueryBuilder(i, (coords) => {
    const filter = getPolyFilter(coords);
    return `
    [out:json][timeout:30];
    (
      relation[type=route][route=bus](${filter});
      relation[type=route][route=train](${filter});
      relation[type=route][route=tram](${filter});
      relation[type=route][route=subway](${filter});
      relation[type=route][route=ferry](${filter});
      relation[type=route][route=light_rail](${filter});
      relation[type=route][route=trolleybus](${filter});
      nw[railway=station](${filter});
      nw[railway=tram_stop](${filter});
    );
    out count;
    `;
  });
  return {
    totalLines: transitCounts.relations,
    railStops: transitCounts.nodes + transitCounts.ways,
    query: transitCounts.query,
  };
}

export const queryOverpass = (queryCode: string): Promise<string> =>
  t(async () => {
    const url = `${OVERPASS_INSTANCE_URL}?data=${encodeURIComponent(
      queryCode
    )}`;
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }, "queryOverpass")();
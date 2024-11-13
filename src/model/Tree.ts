import { Point } from "./Point";

export interface Tree {
  id: number;
  locationType: string;
  domain: string;
  district: string;
  additionalAddress: string;
  number: string;
  address: string;
  locationId: string;
  labelFr: string;
  type: string;
  space: string;
  varietyOrCultivar: string;
  circumference: number;
  height: number;
  developmentStage: string;
  remarkable: boolean;
  geoPoint: Point;
}

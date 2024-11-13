import { Summary } from "@/model/Summary";
import { Tree } from "@/model/Tree";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/tree";
export const findPage = (page: number, size: number): Promise<Tree[]> => {
  return axios.get<Tree[]>(`${baseUrl}?page=${page}&size=${size}`).then(
    (response) => response.data,
    (error) => error
  );
};
export const countByDistrict = (): Promise<Summary[]> => {
  return axios.get<Summary[]>(`${baseUrl}/countByDistrict`).then(
    (response) => response.data,
    (error) => error
  );
};
export const countByType = (): Promise<Summary[]> => {
  return axios.get<Summary[]>(`${baseUrl}/countByType`).then(
    (response) => response.data,
    (error) => error
  );
};

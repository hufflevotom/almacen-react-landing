import axios from "axios";
import { backendUrl } from "../../constants/enviroment";

export declare interface response {
  statusCode: number;
  message: string;
}

export const httpClient = axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

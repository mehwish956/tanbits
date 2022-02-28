import { API_ENDPOINT } from "../config";
import axios from "axios";

export const getData: any = (endpoint: string, query_params?: object) => {
  const url = `${API_ENDPOINT}/${endpoint}`;

  const request = axios.get(url);
  return request
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error));
};

export const postData: any = (endpoint: string, form_data: JSON) => {};

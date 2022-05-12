import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;

export * from "./request";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

//  This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const addTokenToRequest = (request: AxiosRequestConfig) => {
  request.headers!.Authorization = `Bearer ${localStorage.getItem("key-to-get")}`;
  return request;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;

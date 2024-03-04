import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;
export * from "./request";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

// https://dev.to/charlintosh/setting-up-axios-interceptors-react-js-typescript-12k5
// This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const onRequest = (request: AxiosRequestConfig): any => {
  request.headers!.Authorization = localStorage.getItem("key-here") || "";
  return request;
};

// const onRequest = (request: AxiosRequestConfig): any => {
//   const headers: any = request.headers || {};
//   headers.Authorization = localStorage.getItem("key-here") || "";
//   request.headers = headers;
//   return request;
// };

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const statusCode = error.response!.status;
  if (statusCode === 401) {
    // logout user
  }
  return Promise.reject(error);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;

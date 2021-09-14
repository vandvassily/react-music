import axios, { AxiosRequestConfig, ResponseType, AxiosInstance } from 'axios';

import { API_URL } from '../constants/server';

const TIMEOUT = 4000;

const MIME_TYPE: ResponseType = 'json';

const createInstance = () => {
  const instance = axios.create({
    timeout: TIMEOUT,
    withCredentials: true,
    baseURL: API_URL,
    responseType: MIME_TYPE,
  });

  instance.interceptors.response.use(handleResponse, handleError);

  return instance;
};

const handleResponse = (response: any) => {
  return response.data;
};

const handleError = (error: any) => {
  const { response, message } = error;
  return Promise.reject(
    response ? new Error(response.data.message || message) : error,
  );
};

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
}

const request: Instance = createInstance();

export default request;

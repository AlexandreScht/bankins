import axios from 'axios';
import config from '../config/index.js';
const { api_url } = config;

const AxiosRequest = () => {
  return axios.create({
    baseURL: api_url,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  });
};

const AxiosInstance = () => {
  const instance = AxiosRequest();
  instance.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default AxiosInstance;

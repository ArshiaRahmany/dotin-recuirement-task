import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getLocalStorage } from "utils/localStorage";

export const setupRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token: string | null = getLocalStorage("token");
      
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      if (config.data instanceof FormData) {
        delete config.headers["Content-Type"];
      } else {
        config.headers["Content-Type"] = "application/json";
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

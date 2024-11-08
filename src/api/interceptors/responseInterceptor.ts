import { AxiosInstance, AxiosResponse } from 'axios';
import { errorHandler } from 'utils/errorHandler';

export const setupResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      errorHandler(error);
      return Promise.reject(error);
    }
  );
};

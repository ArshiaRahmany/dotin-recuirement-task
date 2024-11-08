import axios from "axios";
import { setupRequestInterceptor } from "api/interceptors/requestInterceptor";
import { setupResponseInterceptor } from "api/interceptors/responseInterceptor";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/', 
    timeout: 10000,
})

setupRequestInterceptor(axiosInstance)
setupResponseInterceptor(axiosInstance)

export default axiosInstance
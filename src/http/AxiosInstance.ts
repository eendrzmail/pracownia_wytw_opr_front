import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://localhost:7261/api/',
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        config.headers.Apikey = 'test'

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;

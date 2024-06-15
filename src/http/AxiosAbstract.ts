import { IWeather } from '@/types/Weather';
import axiosInstance from './AxiosInstance';

export abstract class HttpClient {

    public static getCurrentWeather = (city: string) => {
        return axiosInstance
            .get<IWeather>(`GetCurrentWeather/${city}`)
            .then(response => response.data);
    };

    public static getFutureWeather = (city: string, date:string) => {
        return axiosInstance
            .get<IWeather>(`GetFutureWeather/${city}/${date}`)
            .then(response => response.data);
    };

    public static getForecast = (city: string, days: string | number) => {
        return axiosInstance
            .get<IWeather>(`GetForecast/${city}/${days}`)
            .then(response => response.data);
    };

    public static getWeatherHistory = (city: string, day: string | number) => {
        return axiosInstance
            .get<IWeather>(`GetWeatherHistory/${city}/${day}`)
            .then(response => response.data);
    };
}

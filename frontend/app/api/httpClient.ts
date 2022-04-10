import axios from 'axios';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { LocalStorage } from '../utils/local-storage';

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

httpClient.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            config.headers!['Authorization'] = `Bearer ${LocalStorage.get(STORAGE_KEYS.accessToken)}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

httpClient.interceptors.response.use(
    (response) => {
        console.log(response);
        return { data: response.data.data, error: undefined };
    },
    (error) => {
        console.log(error);
        return Promise.reject({ message: error.response.data.error });
    },
);

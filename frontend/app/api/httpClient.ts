import axios from 'axios';

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' },
});

httpClient.interceptors.response.use(
    (response) => {
        return { data: response.data, error: undefined };
    },
    (error) => {
        return Promise.reject({ message: error.response.data.error });
    },
);

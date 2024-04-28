import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.VERCEL_URL || 'http://127.0.0.1:3000';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
    }
});

export default axiosInstance;
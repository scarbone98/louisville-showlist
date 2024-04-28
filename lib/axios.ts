import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
    }
});

export default axiosInstance;
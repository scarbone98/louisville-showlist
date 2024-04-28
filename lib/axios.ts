import axios, { AxiosRequestConfig } from 'axios';

console.log(process.env);
const baseURL = process.env.VERCEL_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
    }
});

export default axiosInstance;
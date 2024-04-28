import axios, { AxiosRequestConfig } from 'axios';

console.log(process.env);
let baseURL = process.env.VERCEL_URL;

if (process.env.NODE_ENV === 'production') {
    baseURL = `https://${process.env.VERCEL_URL}`;
}

console.log(baseURL);

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
    }
});

export default axiosInstance;
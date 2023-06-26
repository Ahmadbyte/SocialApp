import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://socialsite-uv34.onrender.com/api/',
});
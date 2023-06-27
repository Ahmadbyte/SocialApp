import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://main--dreamy-salamander-a7b8f6.netlify.app/api/',
});
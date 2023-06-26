import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://socialapp-76mg.onrender.com/api/',
});
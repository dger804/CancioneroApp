import axios from 'axios';

export const cancioneroAppServer = axios.create({
    baseURL: process.env.APP_SERVER_URL
});
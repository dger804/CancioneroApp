import axios from 'axios';

export const cancioneroAppServer = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});
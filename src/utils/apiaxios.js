import axios from 'axios';

export const cancioneroAppServer = axios.create({
    baseURL: processs.env.APP_SERVER_URL
});
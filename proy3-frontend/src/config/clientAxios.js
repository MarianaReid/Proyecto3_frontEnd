import axios from "axios";
import { getLocalStorage } from "../utils/LocalStorageHelper";


const defaultOptions = {
    baseURL: 'https://proyecto3-rolling-code-los-crack.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.request.use(function (config) {
    const token = getLocalStorage('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    // console.log("TOKEN:",token);
    // console.log("CONFIG:",config);
    return config;
});


export default clientAxios;
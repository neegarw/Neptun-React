import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL
const cook = new Cookies()

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers : {
        'Authorization' : `Bearer ${cook.get('token')}`
    }
})
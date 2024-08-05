import axios from "axios";
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import { CONSTANTS } from "../@utils/constants";

// Creating Axios Client Instance
export const requestClient = axios.create({
    baseURL: CONSTANTS.BASE_URL
});

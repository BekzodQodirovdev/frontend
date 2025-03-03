import axios from "axios";

export const request = axios.create({
    baseURL: "http://13.234.186.162:3600/",
});

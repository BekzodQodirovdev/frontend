import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:3600" });

request.interceptors.request.use((config) => {
    config.headers["Authorization"] = "Bearer asdasjnfrimkdsa.asdas";
    return config;
});

request.interceptors.response.use((res) => {
    if (res.status === 401) {
    }
    return res;
});

export { request };

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8090/api/",
    timeout: 5000,
});

export default api;

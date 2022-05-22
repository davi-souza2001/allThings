import axios from "axios";

const api = axios.create({
    baseURL: "https://apiallthings-production.up.railway.app/"
})

export default api;
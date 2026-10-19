import axios from "axios";
import env from "~/config/env";

const httpClient = axios.create({
  baseURL: env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default httpClient;
import axios from "axios";
import { getCookie } from "cookies-next";

const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  config => {
    const token = getCookie("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use(
  respone => respone,
  error => {
    return Promise.reject(error);
  }
);
export default apiClient;

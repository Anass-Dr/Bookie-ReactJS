import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("biblio-ticket");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
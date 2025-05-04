import axios from "axios";
import Cookies from "js-cookie"; 

const axiosInstance = axios.create({
  baseURL: "https://api-onway.opream.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

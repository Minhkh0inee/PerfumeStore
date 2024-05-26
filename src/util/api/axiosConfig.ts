import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    // Additional headers can go here
  },
  timeout: 10000,
});

export default axiosInstance;

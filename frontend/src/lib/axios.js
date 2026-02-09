import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatuse.onrender.com/api",
  withCredentials: true,
});

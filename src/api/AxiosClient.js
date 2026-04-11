import axios from "axios";
import { useAuthStore } from "../store/authStore";

// Create instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to your backend
});

// 🔐 REQUEST INTERCEPTOR → attach token
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🚨 RESPONSE INTERCEPTOR → handle 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Auto logout if token expired
      useAuthStore.getState().logout();

      // Optional: redirect
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
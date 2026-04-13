import { create } from "zustand";
import api from "../api/AxiosClient";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  isHydrated: false,

  // 🔐 LOGIN
  login: ({ token, user }) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    set({
      token,
      user,
      isLoggedIn: true,
    });
  },

  // 🚪 LOGOUT
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    set({
      token: null,
      user: null,
      isLoggedIn: false,
    });
  },

  // 🔄 HYDRATE
 hydrate: async () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const storedUser = localStorage.getItem(USER_KEY);

    if (!token) {
      return set({ isHydrated: true });
    }

    // ⚡ Use cached user first
    if (storedUser) {
      set({
        token,
        user: JSON.parse(storedUser),
        isLoggedIn: true,
        isHydrated: true,
      });
    }

    // 🔄 Then verify in background
    const res = await api.get("/auth/me");

    set({
      token,
      user: res.data,
      isLoggedIn: true,
      isHydrated: true,
    });
  } catch (error) {
    localStorage.clear();

    set({
      token: null,
      user: null,
      isLoggedIn: false,
      isHydrated: true,
    });
  }
}
}));
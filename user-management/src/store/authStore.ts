import { create } from "zustand";
import { useUserStore } from "./userStore"; 

interface AuthState {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAdmin: false,
  login: (username, password) => {
    if (username === "admin" && password === "admin123") {
      set({ isAdmin: true });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ isAdmin: false });
    useUserStore.getState().clearUsers(); 
  },
}));

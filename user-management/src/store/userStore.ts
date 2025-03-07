import { create } from "zustand";
import axios from "axios";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface UserStore {
  users: User[];
  setUsers: (users: User[]) => void;
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
  updateUser: (id: number, updatedUser: Partial<User>) => void;
  deleteUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],

  setUsers: (users) => set({ users }),

  fetchUsers: async () => {
    try {
      const response1 = await axios.get("https://reqres.in/api/users?page=1");
      const response2 = await axios.get("https://reqres.in/api/users?page=2");

      const allUsers = [...response1.data.data, ...response2.data.data]; 
      console.log("✅ Zustand - Fetched Users:", allUsers);
      set({ users: allUsers });

      localStorage.setItem("users", JSON.stringify(allUsers)); 
    } catch (error) {
      console.error("❌ Error Fetching Users:", error);
    }
  },
  addUser: (user) =>
    set((state) => {
      const updatedUsers = [...state.users, user];
      console.log("✅ Zustand - User Added:", updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers)); 
      return { users: updatedUsers };
  }),
  updateUser: (id, updatedUser) =>
    set((state) => {
      const updatedUsers = state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );

      console.log("✅ Zustand - Updated Users:", updatedUsers);

      localStorage.setItem("users", JSON.stringify(updatedUsers)); 
      return { users: updatedUsers };
    }),

  deleteUser: (id) =>
    set((state) => {
      const filteredUsers = state.users.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(filteredUsers)); 
      return { users: filteredUsers };
    }),
}));

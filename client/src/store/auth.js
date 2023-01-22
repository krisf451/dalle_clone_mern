import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = (set) => ({
  currentUser: null,
  allUsers: [],

  addUser: (user) => set({ currentUser: user }),
  removeUser: () => set({ currentUser: null }),

  fetchAllUsers: async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    set({ allUsers: data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: 'auth',
  }),
);

export default useAuthStore;

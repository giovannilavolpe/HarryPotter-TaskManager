import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UsernameStore {
  username: string;
  isLoggedIn: boolean;

  setusername: (username: string) => void;
  login: () => void;
  logout: () => void;
}

export const useUsernameStore = create<UsernameStore>()(
  persist(
    (set) => ({
      username: "",
      isLoggedIn: false,

      setusername: (username) => {
        set({ username });
      },

      login: () => {
        set((state) => {
          const username = state.username.trim();

          if (username.length < 3) {
            return {};
          }

          return {
            username,
            isLoggedIn: true,
          };
        });
      },

      logout: () => {
        set({
          username: "",
          isLoggedIn: false,
        });
      },
    }),
    {
      name: "username-storage",
    }
  )
);

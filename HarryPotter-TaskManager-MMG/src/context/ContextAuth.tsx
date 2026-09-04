import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UsernameStore {
  username: string;
  isLoggedIn: boolean;

  error: string;

  setusername: (username: string) => void;
  login: () => void;
  logout: () => void;
}

export const useUsernameStore = create<UsernameStore>()(
  persist(
    (set) => ({
      username: "",
      isLoggedIn: false,
      error: "",
      setusername: (username) => {
        set({ username });
      },

      login: () => {
        set((state) => {
          const username = state.username.trim();

          if (!/^[A-Za-z]+$/.test(username)) {
            return {
              error: "Username can only contain letters.",
            };
          }

          // Minimum length
          if (username.length < 3) {
            return {
              error: "Username must be at least 3 characters.",
            };
          }

          // Maximum length
          if (username.length > 15) {
            return {
              error: "Username must be 15 characters or fewer.",
            };
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

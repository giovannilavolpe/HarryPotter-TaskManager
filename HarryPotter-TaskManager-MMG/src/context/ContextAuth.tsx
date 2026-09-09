import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  password: string;
}

interface UsernameStore {
  email: string;
  password: string;
  isLoggedIn: boolean;
  error: string;
  users: User[];

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;

  login: () => boolean;
  logout: () => void;
}

export const useAccountStore = create<UsernameStore>()(
  persist(
    (set, get) => ({
      email: "",
      password: "",
      isLoggedIn: false,
      error: "",


      //all the valid accounts
      users: [
        {
          email: "test@gmail.com",
          password: "password",
        },
        {
          email: "admin@yahoo.com.ar",
          password: "admin123",
        },
        {
          email: "usertest@gmail.com",
          password: "user",
        },
      ],

      setEmail: (email) => set({ email }),
      setPassword: (password) => set({ password }),


      login: () => {
        const { email, password, users } = get();

        const userExists = users.some(
          (user) =>
            user.email === email && user.password === password
        );

        if (!userExists) {
          set({
            error: "Email o contraseña incorrectos",
            isLoggedIn: false,
          });

          return false;
        }

        set({
          isLoggedIn: true,
          error: "",
          password: "",
        });

        return true;
      },

      logout: () => {
        set({
          email: "",
          password: "",
          isLoggedIn: false,
          error: "",
        });
      },
    }),
    {
      name: "username-storage",
    }
  )
);

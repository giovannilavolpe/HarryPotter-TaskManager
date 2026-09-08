import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BorderTheme =
  | "gryffindor"
  | "slytherin"
  | "hufflepuff"
  | "ravenclaw"
  | "default";

export type BackgroundTheme =
  | "light"
  | "dark";

interface SettingStore {
  backgroundTheme: BackgroundTheme;
  setBackgroundTheme: (theme: BackgroundTheme) => void;

  borderTheme: BorderTheme;
  setBorderTheme: (theme: BorderTheme) => void;
}

export const useSettingStore = create<SettingStore>()(
  persist(
    (set) => ({
      backgroundTheme: "dark",

      setBackgroundTheme: (theme) => {
        set({ backgroundTheme: theme });
      },

      borderTheme: "default",

      setBorderTheme: (theme) => {
        set({ borderTheme: theme });
      },
    }),
    {
      name: "setting-store",
    }
  )
);

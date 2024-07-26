import { getCookie, setCookie } from "@/helpers/utils/cookies";
import { create } from "zustand";

type Store = {
  theme: string;
  changeTheme: () => void;
};

const useThemeStore = create<Store>((set) => {
  const initialTheme = getCookie("theme") || "light";

  return {
    theme: initialTheme,
    changeTheme: () =>
      set((state) => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        return { theme: newTheme };
      }),
  };
});

export default useThemeStore;

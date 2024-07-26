import useThemeStore from "@/store/theme-store";
import { setCookie } from "../utils/cookies";

const useTheme = () => {
  const { changeTheme, theme } = useThemeStore();
  const mode = theme === "dark" ? "light" : "dark";
  const handleSetTheme = () => {
    changeTheme();
    setCookie("theme", mode);
  };

  return { handleSetTheme };
};

export { useTheme };

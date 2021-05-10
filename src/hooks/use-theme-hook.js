import { useContext } from "react";
import { ThemeContext } from "../state/theme-context";

export default function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return { darkMode, setDarkMode };
}

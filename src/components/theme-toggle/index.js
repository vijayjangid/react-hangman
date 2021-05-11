import { useCallback } from "react";
import { useDarkMode } from "../../hooks";
import "./style.css";

const Sun = () => <>&#9728;</>;
const Moon = () => <>&#9790;</>;

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();
  const onToggle = useCallback(() => {
    setDarkMode((theme) => !theme);
  }, [setDarkMode]);

  const themeSymbol = darkMode ? <Sun /> : <Moon />;
  return (
    <span className="theme-toggle neumorph" onClick={onToggle}>
      {themeSymbol}
    </span>
  );
}

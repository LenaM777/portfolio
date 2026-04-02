import { useTheme } from "../../context/ThemeContext";
import Icon from "../Icons/Icons";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      <Icon name={theme === "light" ? "moon-o" : "sun"} />
    </button>
  );
};

export default ThemeToggler;

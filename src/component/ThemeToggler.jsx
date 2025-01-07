import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonStyle = {
    margin: "20px",
    padding: "10px",
    background: theme === "light" ? "#000" : "#fff",
    color: theme === "light" ? "#fff" : "#000",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggler;

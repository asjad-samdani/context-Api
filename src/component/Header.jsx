import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  const headerStyle = {
    padding: "10px",
    textAlign: "center",
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return <header style={headerStyle}>React Context API Theme</header>;
};

export default Header;

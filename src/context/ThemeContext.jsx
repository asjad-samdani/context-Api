import { createContext, useState } from "react";
import { useContext } from "react";
//create context
export const ThemeContext = createContext();

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

//provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

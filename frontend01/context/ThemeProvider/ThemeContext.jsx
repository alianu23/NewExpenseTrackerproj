const { createContext, useState, useEffect } = require("react");

export const ThemeContext = createContext("light ");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

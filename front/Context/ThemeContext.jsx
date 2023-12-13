import React, { createContext } from "react";

export const ThemeContext = createContext("light");
const ThemeProvider = () => {
  return <div>ThemeContext</div>;
};

export default ThemeContext;

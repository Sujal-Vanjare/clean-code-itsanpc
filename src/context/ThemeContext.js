"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("mode");
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      // If no preference is stored, check for user's preferred color scheme and set the theme accordingly
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(prefersDarkScheme ? "dark" : "light");
    }
  }, []);

  const toggle = () => {
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    localStorage.setItem("mode", newTheme); // Store the theme preference in local storage
  };
  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute("data-mode", mode);
    }
  }, [mode]);
  if (mode === null) {
    // If mode is null (initial load or user prefers light theme), return null to avoid rendering anything
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

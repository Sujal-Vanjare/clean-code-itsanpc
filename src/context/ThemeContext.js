"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(); // Context to provide or read

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(null); // State for setting a theme mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("mode"); // Check if a theme is set in local storage
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      // If no preference is stored
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)" // operating system or browser prefers a dark Theme
      ).matches;
      setMode(prefersDarkScheme ? "dark" : "light"); // if matches then dark, if not then light
    }
  }, []); // run only once when component mount

  const toggle = () => {
    const newTheme = mode === "dark" ? "light" : "dark"; // "If the current theme mode is 'dark', set newTheme to 'light'; otherwise, set it to 'dark'.
    setMode(newTheme);
    localStorage.setItem("mode", newTheme); // Store the theme preference in local storage
  };

  // Update the HTML attribute 'data-mode' dynamically to apply styles based on the theme
  useEffect(() => {
    // Check if mode has a value (not null or undefined)
    if (mode) {
      // Set the 'data-mode' attribute on the HTML element to dynamically apply styles based on the theme
      document.documentElement.setAttribute("data-mode", mode);
    }
  }, [mode]);

  // If mode is null (initial load or user prefers light theme),
  // return null to avoid rendering anything until the theme preference is determined
  if (mode === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {/* Render children within a div with the current theme class */}
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

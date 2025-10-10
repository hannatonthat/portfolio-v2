"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function Theme({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

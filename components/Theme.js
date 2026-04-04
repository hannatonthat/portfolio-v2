"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function readStoredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Theme({ children }) {
  // Fixed default so SSR + first client render match (avoids hydration mismatch).
  // Real preference is applied in useEffect after mount.
  const [darkMode, setDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDarkMode(readStoredTheme());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, hydrated]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

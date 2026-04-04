"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "./Theme";

import Link from "next/link";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  return (
    <nav className="flex w-full items-center justify-between py-8">
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </Link>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="flex shrink-0 items-center justify-center"
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="cursor-pointer text-xl transition-transform duration-300 hover:scale-110"
        />
      </button>
    </nav>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "./Theme";

import Link from "next/link";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  return (
    <nav className="backdrop-blur-sm">
      <div className="max-w-screen-md mx-auto py-8">
        <ul className="flex justify-between items-center w-full">
          <li>
            <Link
              href="/"
              className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Hanna Ton That
            </Link>
          </li>
          <div className="flex gap-6">
            <li>
              <Link
                href="/"
                className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                About
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
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-xl cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

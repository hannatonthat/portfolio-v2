"use client";

import Link from "next/link";

import { useContext } from "react";
import { ThemeContext } from "@components/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="mt-16">
      <ul className="flex justify-between items-center w-full">
        <li><Link href="/">Hanna Ton That</Link></li>
        <div className="flex gap-4">
          <li><Link href="/">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl cursor-pointer" />
          </button>
        </div>
      </ul>
    </nav>
  )
}

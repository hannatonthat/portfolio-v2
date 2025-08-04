"use client";

import Link from "next/link";

import { useContext } from "react";
import { ThemeContext } from "@components/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="mt-16 mb-8">
      <ul className="flex justify-between items-center w-full">
        <li><Link href="/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Hanna Ton That</Link></li>
        <div className="flex gap-4">
          <li><Link href="#about" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">About</Link></li>
          <li><Link href="#experience" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Experience</Link></li>
          <li><Link href="#projects" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Projects</Link></li>
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
          </button>
        </div>
      </ul>
    </nav>
  )
}

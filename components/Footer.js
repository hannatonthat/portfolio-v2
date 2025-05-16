"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hannatonthat@gmail.com")
      .then(() => {
        alert("Email copied!");
      })
      .catch(err => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <footer className="flex justify-between items-center w-full">
      <p>2025 © Hanna Ton That</p>
      <div className="flex gap-2">
        <a 
          href="https://github.com/hannatonthat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>

        <a 
          href="https://www.linkedin.com/in/hannatonthat/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>

        <button
          onClick={copyEmail}
          className=""
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl cursor-pointer" />
        </button>

        <a 
          href="@public/assets/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
        </a>
      </div>
    </footer>
  )
}

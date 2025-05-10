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
    <footer className="">
      <p>2025 © Hanna Ton That</p>

      <a 
        href="https://github.com/hannatonthat" 
        target="_blank" 
        rel="noopener noreferrer" 
        className=""
      >
        <FontAwesomeIcon icon={faGithub} className="text-black w-5 h-5" />
      </a>

      <a 
        href="https://www.linkedin.com/in/hannatonthat/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className=""
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-black w-5 h-5" />
      </a>

      <button
        onClick={copyEmail}
        className=""
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-black w-5 h-5 cursor-pointer" />
      </button>

      <a 
        href="@public/assets/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className=""
      >
        <FontAwesomeIcon icon={faFilePdf} className="text-black w-5 h-5" />
      </a>
    </footer>
  )
}

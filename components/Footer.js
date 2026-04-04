"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const copyEmail = () => {
    navigator.clipboard.writeText("htonthat@uwaterloo.ca")
      .then(() => {
        alert("Email copied!");
      })
      .catch(err => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <footer className="flex w-full items-center justify-between py-8">
      <div className="flex gap-2">
        <a
          href="https://github.com/hannatonthat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl transition-transform duration-300 hover:scale-110" />
        </a>

        <a
          href="https://www.linkedin.com/in/hannatonthat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl transition-transform duration-300 hover:scale-110" />
        </a>

        <button type="button" onClick={copyEmail}>
          <FontAwesomeIcon icon={faEnvelope} className="text-xl cursor-pointer transition-transform duration-300 hover:scale-110" />
        </button>
      </div>
      <p>
        {year} © Hanna Ton That
      </p>
    </footer>
  )
}

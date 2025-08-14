'use client';

import Navbar from "@components/Navbar"
import StaggeredLine from "@components/StaggeredLine";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Hero() {
  let index = 0
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phrases = ["Software Developer", "Machine Learning Engineer", "Robotics Engineer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[textIndex];
    if (displayedText.length < currentPhrase.length) {
      timeout = setTimeout(() => setDisplayedText(currentPhrase.slice(0, displayedText.length + 1)), typingSpeed);
    } else {
      timeout = setTimeout(() => {
        let nextIndex = (textIndex + 1) % phrases.length;
        let deleteInterval = setInterval(() => {
          setDisplayedText(prev => {
            if (prev.length === 0) {
              clearInterval(deleteInterval);
              setTextIndex(nextIndex);
              return "";
            }
            return prev.slice(0, -1);
          });
        }, deletingSpeed);
      }, pauseTime);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

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
    <section className="relative h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
        <StaggeredLine index={index}>
          <h1 className="!mb-2">Hanna Ton That</h1>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <p className="">{displayedText}<span className={`${showCursor ? "opacity-100" : "opacity-0"} inline-block`}>|</span></p>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <div className="mt-4 flex gap-2">
            <a 
              href="https://github.com/hannatonthat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className=""
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl transition-transform duration-300 hover:scale-110" />
            </a>
          
            <a 
              href="https://www.linkedin.com/in/hannatonthat/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className=""
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl transition-transform duration-300 hover:scale-110" />
            </a>
          
            <button
              onClick={copyEmail}
              className=""
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
            </button>
          </div>
        </StaggeredLine>
    </section>
  );
}
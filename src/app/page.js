'use client';

import Image from "next/image";

import { Typewriter } from 'react-simple-typewriter';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
    <section className="">
      <h1 className="">Hi, I&apos;m Hanna!</h1>

      <h2 className="">
        <Typewriter
          words={['Software Developer', 'AI/ML Developer', 'Robotics Engineer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <div className="flex gap-2">
        <a 
          href="https://github.com/hannatonthat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl transition-transform duration-300 hover:scale-110" />
        </a>

        <a 
          href="https://www.linkedin.com/in/hannatonthat/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl transition-transform duration-300 hover:scale-110" />
        </a>

        <button
          onClick={copyEmail}
          className=""
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl cursor-pointer transition-transform duration-300 hover:scale-110" />
        </button>

        <a 
          href="@public/assets/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-xl transition-transform duration-300 hover:scale-110" />
        </a>
      </div>

      <h3 className="">Recently...</h3>
      <ul className="list-disc list-inside">
        <li>Mechatronics Engineering @ University of Waterloo</li>
        <li>Backend Developer & Data Engineer @ Privy Council Office</li>
        <li></li>
      </ul>
      <h1 className="">About</h1>
      <div className="flex gap-8">
        <div className="flex flex-col justify-center">
          <p className="">Passionate about software development, AI/ML, and robotics, I&apos;m currently studying Mechatronics Engineering at the University of Waterloo.</p>
          <p className="">From backend systems to machine learning models, I&apos;m committed to building high-quality applications that bring real value to the world.</p>
          <p className="">I&apos;m always eager to meet like-minded individuals and discuss exciting projects. Feel free to reach out!</p>
        </div>
        <div className="">
          <Image
          src="/assets/profile.png"
          alt=""
          width="500"
          height="500"
          className="rounded-full bg-zinc-200"
        />
        </div>
      </div>
    </section>
  )
}

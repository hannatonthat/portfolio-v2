'use client';

import Experience from '@components/Experience';
import Project from '@components/Project';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    <main>
      <section id="about" className="">
        <h1 className="">Hi, I&apos;m Hanna!</h1>

        <div className="flex gap-2">
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

        <h1 className="">Recently...</h1>
        <ul className="list-disc list-outside pl-6">
          <li>Mechatronics Engineering @ University of Waterloo</li>
          <li>Backend Developer & Data Engineer @ Government of Canada</li>
          <li>Building a ML trading bot with predictive models, backtesting, and Docker deployment</li>
        </ul>
        <h1 className="">About</h1>
        <div className="flex gap-8">
          <div className="flex flex-col justify-center space-y-4">
            <p className="">Passionate about software development, AI/ML, and robotics, I&apos;m currently studying Mechatronics Engineering at the University of Waterloo.</p>
            <p className="">From backend systems to machine learning models, I&apos;m committed to building high-quality applications that bring real value to the world.</p>
            <p className="">I&apos;m always eager to meet like-minded individuals and discuss exciting projects. Feel free to reach out!</p>
          </div>
        </div>
      </section>
      <section id="experience">
        <Experience></Experience>
      </section>
      <section id="projects">
        <Project></Project>
      </section>
    </main>
  )
}

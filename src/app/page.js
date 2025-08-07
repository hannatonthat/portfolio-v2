'use client';

import StaggeredLine from "@components/StaggeredLine";
import Experience from '@components/Experience';
import Project from '@components/Project';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const copyEmail = () => {
    navigator.clipboard.writeText("htonthat@uwaterloo.ca")
      .then(() => alert("Email copied!"))
      .catch(err => console.error("Failed to copy email:", err));
  };

  let index = 0;

  return (
    <main>
      <section id="about" className="space-y-4">
        <StaggeredLine index={index++}>
          <h1>Hi, I&apos;m Hanna!</h1>
        </StaggeredLine>

        <StaggeredLine index={index++}>
          <h1>Recently...</h1>
        </StaggeredLine>

        <ul className="list-disc list-outside pl-6">
          <StaggeredLine index={index++}>
            <li>Mechatronics Engineering @ University of Waterloo</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Backend Developer & Data Engineer @ Government of Canada</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Building a ML trading bot with predictive models, backtesting, and Docker deployment</li>
          </StaggeredLine>
        </ul>

        <StaggeredLine index={index++}>
          <h1>About</h1>
        </StaggeredLine>

        <div className="flex flex-col gap-4">
          <StaggeredLine index={index++}>
            <p>Passionate about software development, AI/ML, and robotics, I&apos;m currently studying Mechatronics Engineering at the University of Waterloo.</p>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <p>From backend systems to machine learning models, I&apos;m committed to building high-quality applications that bring real value to the world.</p>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <p>I&apos;m always eager to meet like-minded individuals and discuss exciting projects. Feel free to reach out!</p>
          </StaggeredLine>
        </div>
      </section>

      <section id="experience" className="mt-12">
        <Experience />
      </section>

      <section id="projects" className="mt-12">
        <Project />
      </section>
    </main>
  );
}
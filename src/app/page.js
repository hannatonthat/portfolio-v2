'use client';

import StaggeredLine from "@components/StaggeredLine";
import Experience from '@components/Experience';
import Project from '@components/Project';

export default function Home() {
  const copyEmail = () => {
    navigator.clipboard.writeText("htonthat@uwaterloo.ca")
      .then(() => alert("Email copied!"))
      .catch(err => console.error("Failed to copy email:", err));
  };

  let index = 0;

  return (
    <main>
      <section id="about" className="">
        <StaggeredLine index={index++}>
          <h1>Hanna Ton That</h1>
        </StaggeredLine>

        <ul className="list-disc list-outside pl-6">
          <StaggeredLine index={index++}>
            <li>Engineer focused on backend systems, AI/ML, and robotics</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Currently studying Mechatronics Engineering at the University of Waterloo</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Driven by building systems that work well, feel right, and make a difference</li>
          </StaggeredLine>
        </ul>
      </section>

      <section id="experience" className="mt-8">
        <Experience />
      </section>

      <section id="projects" className="mt-8">
        <Project />
      </section>
    </main>
  );
}
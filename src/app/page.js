'use client';

import StaggeredLine from "@components/StaggeredLine";
import Experience from '@components/Experience';
import Project from '@components/Project';

export default function Home() {
  let index = 0;

  return (
    <main>
      <section id="about" className="">
        <StaggeredLine index={index++}>
          <h1>Hanna Ton That</h1>
        </StaggeredLine>

        <ul className="list-disc list-outside pl-6">
          <StaggeredLine index={index++}>
            <li>Engineer and developer building thoughtful systems across backend, AI/ML, and robotics</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Studying Mechatronics Engineering @ UWaterloo— I write code more than I wire circuits</li>
          </StaggeredLine>
          <StaggeredLine index={index++}>
            <li>Focused on software that works well, feels right, and genuinely makes a difference</li>
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
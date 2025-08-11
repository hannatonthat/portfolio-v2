'use client';

import About from "@components/About";
import Experience from '@components/Experience';
import Project from '@components/Project';

export default function Home() {
  return (
    <main>
      <section id="about" className="">
        <About />
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
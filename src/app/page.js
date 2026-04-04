'use client';

import About from "@components/About";
import Experience from "@components/Experience";

export default function Home() {
  return (
    <div className="space-y-8">
      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>
    </div>
  );
}
'use client';

import About from "@components/About";
import Experience from '@components/Experience';

export default function Home() {
  return (
    <main>
      <section id="about" className="">
        <About />
      </section>

      <section id="experience" className="mt-8">
        <Experience />
      </section>
    </main>
  );
}
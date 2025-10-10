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

      <div className="flex mt-8">
        <a href="/projects">
          <button className="bg-zinc-200 dark:bg-zinc-800 text-sm px-2 py-1 rounded-md transition-transform duration-200 hover:scale-105 cursor-pointer">
            View my projects →
          </button>
        </a>
      </div>
    </main>
  );
}
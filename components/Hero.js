'use client';

import Navbar from "@components/Navbar"
import StaggeredLine from "@components/StaggeredLine";

export default function Hero() {
  let index = 0

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
        <StaggeredLine index={index}>
          <h1 className="">Hanna Ton That</h1>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <p className="">Mechatronics @ UWaterloo</p>
        </StaggeredLine>
    </section>
  );
}

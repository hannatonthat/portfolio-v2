'use client';

import StaggeredLine from "@components/StaggeredLine";

export default function About() {
  let index = 2;

  return (
    <div>
      <StaggeredLine index={index}>
        <h2>About</h2>
      </StaggeredLine>

      <ul className="list-disc list-outside pl-6">
        <StaggeredLine index={++index}>
          <li>Engineer and developer building thoughtful systems across backend, AI/ML, and robotics</li>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <li>Studying Mechatronics Engineering @ UWaterloo— I write code more than I wire circuits</li>
        </StaggeredLine>
        <StaggeredLine index={++index}>
          <li>Focused on software that works well, feels right, and genuinely makes a difference</li>
        </StaggeredLine>
      </ul>
    </div>
  )
}

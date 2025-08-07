'use client';

import ExperienceItem from "@components/ExperienceItem";
import StaggeredLine from "@components/StaggeredLine";

export default function Experience() {
  const baseIndex = 10;

  return (
    <main className="">
      <StaggeredLine index={baseIndex}>
        <h1 className="">Experience</h1>
      </StaggeredLine>

      <StaggeredLine index={baseIndex + 1}>
        <ExperienceItem 
          image="/assets/government.png"
          company="Government of Canada" 
          title="Backend Developer & Data Engineer"
          date="May 2025 - Present"
          location="Ottawa, ON"
        />
      </StaggeredLine>

      <StaggeredLine index={baseIndex + 2}>
        <ExperienceItem 
          image="/assets/chusj.png"
          company="CHU Sainte-Justine" 
          title="Software Developer" 
          date="May 2024 - Aug 2024"
          location="Montreal, QC"
        />
      </StaggeredLine>

      <StaggeredLine index={baseIndex + 3}>
        <ExperienceItem 
          image="/assets/dawson.png"
          company="Dawson College" 
          title="Software Developer" 
          date="Jan 2024 - May 2024"
          location="Montreal, QC"
        />
      </StaggeredLine>
    </main>
  )
}

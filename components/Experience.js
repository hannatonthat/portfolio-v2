'use client';

import ExperienceItem from "@components/ExperienceItem";
import StaggeredLine from "@components/StaggeredLine";

export default function Experience() {
  let index = 6;

  return (
    <main className="">
      <StaggeredLine index={index}>
        <h2 className="">Experience</h2>
      </StaggeredLine>

      <StaggeredLine index={++index}>
        <ExperienceItem 
          image="/assets/government.png"
          company="Government of Canada" 
          title="Backend Developer & Data Engineer"
          date="May 2025 - Present"
          location="Ottawa, ON"
        />
      </StaggeredLine>

      <StaggeredLine index={++index}>
        <ExperienceItem 
          image="/assets/chusj.png"
          company="CHU Sainte-Justine" 
          title="Software Developer" 
          date="May 2024 - Aug 2024"
          location="Montreal, QC"
        />
      </StaggeredLine>

      <StaggeredLine index={++index}>
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

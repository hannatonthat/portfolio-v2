'use client';

import ExperienceItem from "@components/ExperienceItem";
import StaggeredLine from "@components/StaggeredLine";

export default function Experience() {
  let index = 4;

  return (
    <main className="">
      <StaggeredLine index={index}>
        <h2 className="">Experience</h2>
      </StaggeredLine>

      <ul className="">
        <StaggeredLine index={++index}>
          <ExperienceItem 
            image="/assets/government.png"
            company="Government of Canada"
            companyLink="https://www.canada.ca/en.html"
            title="Backend Developer @"
            date="May 2025 - Present"
            location="Ottawa, ON"
          />
        </StaggeredLine>

        <StaggeredLine index={++index}>
          <ExperienceItem 
            image="/assets/chusj.png"
            company="CHU Sainte-Justine"
            companyLink="https://www.chusj.org/en"
            title="Software Developer @" 
            date="May 2024 - Aug 2024"
            location="Montreal, QC"
          />
        </StaggeredLine>

        <StaggeredLine index={++index}>
          <ExperienceItem 
            image="/assets/dawson.png"
            company="Dawson College"
            companyLink="https://www.dawsoncollege.qc.ca/"
            title="Software Developer @" 
            date="Jan 2024 - May 2024"
            location="Montreal, QC"
          />
        </StaggeredLine>
      </ul>
    </main>
  )
}

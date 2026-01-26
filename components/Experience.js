'use client';

import ExperienceItem from "@components/ExperienceItem";

export default function Experience() {
  return (
    <main className="">
      <h2 className="">Experience</h2>

      <ul className="">
        <ExperienceItem 
          image="/assets/government.png"
          company="Government of Canada"
          companyLink="https://www.canada.ca/en.html"
          title="Software Developer @"
          date="May 2025 - Dec 2025"
          location="Ottawa, ON"
        />

        <ExperienceItem 
          image="/assets/chusj.png"
          company="CHU Sainte-Justine"
          companyLink="https://www.chusj.org/en"
          title="Software Developer @" 
          date="May 2024 - Aug 2024"
          location="Montreal, QC"
        />

        <ExperienceItem 
          image="/assets/dawson.png"
          company="Dawson College"
          companyLink="https://www.dawsoncollege.qc.ca/"
          title="Software Developer @" 
          date="Jan 2024 - May 2024"
          location="Montreal, QC"
        />
      </ul>
    </main>
  )
}

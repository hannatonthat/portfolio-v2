import ExperienceItem from "@components/ExperienceItem";

export default function Experience() {
  return (
    <main className="">
      <h1 className="">Experience</h1>
      <ExperienceItem 
        image="/assets/government.png"
        company="Government of Canada" 
        title="Backend Developer & Data Engineer"
        date="May 2025 - Present"
        location="Ottawa, ON"
      />
      <ExperienceItem 
        image="/assets/chusj.png"
        company="CHU Sainte-Justine" 
        title="Software Developer" 
        date="May 2024 - Aug 2024"
        location="Montreal, QC"
      />
      <ExperienceItem 
        image="/assets/dawson.png"
        company="Dawson College" 
        title="Software Developer" 
        date="Jan 2024 - May 2024"
        location="Montreal, QC"
      />
    </main>
  )
}
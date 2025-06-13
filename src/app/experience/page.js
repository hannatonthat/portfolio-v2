import ExperienceItem from "@components/ExperienceItem";

export default function Experience() {
  return (
    <main className="">
      <h1 className="">Experience</h1>
      <ExperienceItem 
        image="/assets/warg.png"
        company="Waterloo Aerial Robotics Group" 
        title="Software Developer" 
        date="Sep 2024 - Present"
        location="Waterloo, ON"
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        image="/assets/pco.png"
        company="Privy Council Office" 
        title="Backend Developer & Data Engineer"
        date="May 2025 - Aug 2025"
        location="Ottawa, ON"
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        image="/assets/chusj.png"
        company="CHU Sainte-Justine" 
        title="Software Developer" 
        date="May 2024 - Aug 2024"
        location="Montreal, QC"
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        image="/assets/dawson.png"
        company="Dawson College" 
        title="Software Developer" 
        date="Jan 2024 - May 2024"
        location="Montreal, QC"
        summary={[
          "",
          "",
          ""
        ]}
      />
    </main>
  )
}
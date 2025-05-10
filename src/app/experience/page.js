import ExperienceItem from "@components/ExperienceItem";

export default function Experience() {
  return (
    <main className="">
      <h1 className="">Experience</h1>
      <ExperienceItem 
        company="Privy Council Office" 
        title="Backend Developer & Data Engineer" 
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        company="CHU Sainte-Justine" 
        title="Machine Learning Developer" 
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        company="Waterloo Aerial Robotics Group" 
        title="Software Developer" 
        summary={[
          "",
          "",
          ""
        ]}
      />
      <ExperienceItem 
        company="Waterloo Reality Labs" 
        title="Software Developer" 
        summary={[
          "",
          "",
          ""
        ]}
      />
    </main>
  )
}
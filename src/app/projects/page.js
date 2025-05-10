import ProjectItem from "@components/ProjectItem";

export default function Project() {
  return (
    <main className="">
      <h1 className="">Projects</h1>
      
      <ProjectItem 
        image="/assets/"
        title="Project 1" 
        github=""
        summary={[
          "",
          "",
          ""
        ]}
        skills={[
          "Skill 1",
          "Skill 2",
          "Skill 3"
        ]}
      />

      <ProjectItem 
        image="/assets/"
        title="Project 2" 
        summary={[
          "",
          "",
          ""
        ]}
      />

      <ProjectItem 
        image="/assets/"
        title="Project 3" 
        summary={[
          "",
          "",
          ""
        ]}
      />

      <ProjectItem 
        image="/assets/"
        title="Project 4" 
        summary={[
          "",
          "",
          ""
        ]}
      />
    </main>
  )
}
import ProjectItem from "@components/ProjectItem";

export default function Project() {
  return (
    <main className="">
      <h1 className="">Projects</h1>
      
      <ProjectItem 
        image="/assets/"
        title="Match-A-Wish" 
        github="https://github.com/hannatonthat/MatchAWish-McHacks2025"
        devpost="https://devpost.com/software/match-a-wish"
        summary={[
          "Winner - Best AI Project with Databricks Open Source",
          "",
          ""
        ]}
        skills={[
          "React",
          "Node.js",
          "OpenAI",
          "Auth0",
          "Databricks",
          "JavaScript"
        ]}
      />

      <ProjectItem 
        image="/assets/"
        title="RemberU"
        github="https://github.com/hannatonthat/RemberU-HTN2024"
        devpost="https://devpost.com/software/orientu"
        summary={[
          "",
          "",
          ""
        ]}
        skills={[
          "Flutter",
          "Dart",
          "Firebase",
          "Flask",
          "OpenCV",
          "YOLOv8",
          "PyTorch",
          "Python"
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
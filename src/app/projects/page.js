'use client';

import { useState } from 'react';
import ProjectItem from "@components/ProjectItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const allProjects = [
  {
    image: "/assets/",
    title: "Match-A-Wish",
    github: "https://github.com/hannatonthat/MatchAWish-McHacks2025",
    devpost: "https://devpost.com/software/match-a-wish",
    summary: [
      "Winner - Best AI Project with Databricks Open Source",
      "",
      ""
    ],
    skills: ["React", "Node.js", "OpenAI", "Auth0", "Databricks", "JavaScript"]
  },
  {
    image: "/assets/",
    title: "RemberU",
    github: "https://github.com/hannatonthat/RemberU-HTN2024",
    devpost: "https://devpost.com/software/orientu",
    summary: ["", "", ""],
    skills: ["Flutter", "Dart", "Firebase", "Flask", "OpenCV", "YOLOv8", "PyTorch", "Python"]
  },
  {
    image: "/assets/",
    title: "Project 3",
    summary: ["", "", ""],
    skills: []
  },
  {
    image: "/assets/",
    title: "Project 4",
    summary: ["", "", ""],
    skills: []
  }
];

export default function Project() {
  const [query, setQuery] = useState("");

  const filteredProjects = allProjects.filter(project =>
    project.skills.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <main className="">
      <h1 className="">Projects</h1>

      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
        />
        <input
          type="text"
          placeholder="Search by skill"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-9 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md focus:outline-2 focus:outline-zinc-400 dark:focus:outline-zinc-500 text-black dark:text-white"
        />
      </div>

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, idx) => (
          <ProjectItem
            key={idx}
            image={project.image}
            title={project.title}
            github={project.github}
            devpost={project.devpost}
            summary={project.summary}
            skills={project.skills}
          />
        ))
      ) : (
        <p className="text-zinc-500">No matching projects found.</p>
      )}
  
    </main>
  )
}
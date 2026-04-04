'use client';

import { useState } from 'react';
import ProjectItem from "@components/ProjectItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const allProjects = [
  {
    title: "Resumaxx",
    github: "https://github.com/hannatonthat/resumaxx",
    summary: "Cursor for resumes. AI resume tailor with inline diff editing & smart suggestions.",
    skills: ["React", "Next.js", "Typescript", "Supabase", "PostgreSQL", "Redis", "Stripe", "Docker", "Claude API"]
  },
  {
    title: "Remap",
    github: "https://github.com/hannatonthat/remap-uofthacks2026",
    summary: "3D urban planner with multi-agent AI for real-time geospatial analysis & redesigns.",
    skills: ["React", "Next.js", "Typescript", "FastAPI", "Python", "MongoDB", "LangChain", "LangGraph"]
  },
  {
    title: "Match-A-Wish",
    github: "https://github.com/hannatonthat/matchawish-mchacks2025",
    summary: "AI matching platform to connect donor surplus to children's hospitals in need.",
    skills: ["React", "Javascript", "Node.js", "Auth0", "Databricks", "OpenAI"]
  },
  {
    title: "RemberU",
    github: "https://github.com/hannatonthat/remberu-htn2024",
    summary: "AI memory aid with face recognition, lip reading & conversation summarization.",
    skills: ["Flutter", "Dart", "Firebase", "Flask", "Python", "OpenCV", "YOLOv8", "PyTorch", "Gemini"]
  },
];

export default function Project() {
  const [query, setQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");

  const handleSearch = () => setQuery(tempQuery);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setTempQuery("");
    setQuery("");
  };

  const filteredProjects = allProjects.filter(project =>
    project.skills.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col">
      <h2>Projects</h2>

      <div className="relative w-full mb-4">
        <button
          type="button"
          onClick={handleSearch}
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 transition-transform duration-300 hover:scale-110 hover:text-black dark:text-zinc-500 dark:hover:text-white"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="Search by skill"
          value={tempQuery}
          onChange={e => setTempQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md bg-zinc-200 p-1 pl-9 text-black focus:outline-2 focus:outline-zinc-400 dark:bg-zinc-800 dark:text-white dark:focus:outline-zinc-500"
        />
        {tempQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-lg leading-none text-zinc-400 transition-transform duration-300 hover:scale-110 hover:text-black dark:text-zinc-500 dark:hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              github={project.github}
              devpost={project.devpost}
              summary={project.summary}
              skills={project.skills}
              onSkillClick={(skill) => {
                setTempQuery(skill);
                setQuery(skill);
              }}
            />
          ))
        ) : (
          <p className="col-span-full">No matching projects found.</p>
        )}
      </div>
    </div>
  );
}
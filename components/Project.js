'use client';

import { useState } from 'react';
import ProjectItem from "@components/ProjectItem";
import StaggeredLine from "@components/StaggeredLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const allProjects = [
  {
    title: "Match-A-Wish",
    github: "https://github.com/hannatonthat/MatchAWish-McHacks2025",
    summary: "AI-powered matching platform to connect donor surplus to hospitals in need. Designed in 24 hours, winning at McHacks 2025.",
    skills: ["React", "Node.js", "OpenAI", "Auth0", "Databricks", "JavaScript"]
  },
  {
    title: "RemberU",
    github: "https://github.com/hannatonthat/RemberU-HTN2024",
    summary: "A memory aid device with face recognition, lip reading, and conversation summarization. Designed in 36 hours at Hack The North 2024.",
    skills: ["Flutter", "Dart", "Firebase", "Flask", "OpenCV", "YOLOv8", "PyTorch", "Python"]
  },
  {
    title: "BullBot",
    github: "https://github.com/hannatonthat/BullBot",
    summary: "A ML trading bot using ensemble learning and time series forecasting with backtesting to identify bullish signals and beat the S&P 500.",
    skills: ["Next.js", "React", "TypeScript", "FastAPI", "Scikit-learn", "XGBoost", "yfinance", "Python"]
  },
  {
    title: "Minerva",
    github: "https://github.com/hannatonthat/Minerva",
    summary: "Playable ML chess engine trained on grandmaster games to evaluate board states and suggest optimal moves in real time.",
    skills: ["Next.js", "React", "TypeScript", "chess.js", "FastAPI", "python-chess", "PyTorch", "Python"]
  },
  {
    title: "CustomGPT",
    github: "https://github.com/hannatonthat/CustomGPT",
    summary: "Customizable LLM for efficient text generation, fine-tuned using the Tiny Shakespeare dataset to a training loss of 0.32.",
    skills: ["PyTorch", "Python"]
  },
  {
    title: "NeuroNet",
    github: "https://github.com/hannatonthat/NeuroNet",
    summary: "A neural network built from scratch with 0 dependencies, trained on the MNIST dataset with a 96% accuracy.",
    skills: ["C++"]
  },
  {
    title: "DiaDetect",
    github: "https://github.com/hannatonthat/DiaDetect",
    summary: "A ML model designed to assist in the early detection of diabetes risk, optimized to a 92% accuracy using the Pima Indians dataset.",
    skills: ["Scikit-learn", "Python"]
  }
];

export default function Project() {
  const [query, setQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");
  const [projectBaseIndex, setProjectBaseIndex] = useState(8);

  const handleSearch = () => setQuery(tempQuery);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setTempQuery("");
    setQuery("");
    setProjectBaseIndex(0);
  };

  const filteredProjects = allProjects.filter(project =>
    project.skills.some(skill =>
      skill.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <main className="">
      <StaggeredLine index={8}>
        <h2 className="">Projects</h2>
      </StaggeredLine>

      <StaggeredLine index={9}>
        <div className="relative w-full">
          <button
            onClick={handleSearch}
            className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 hover:scale-110 hover:text-black dark:hover:text-white"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="Search by skill"
            value={tempQuery}
            onChange={e => setTempQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-9 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md focus:outline-2 focus:outline-zinc-400 dark:focus:outline-zinc-500 text-black dark:text-white"
          />
          {tempQuery && (
            <button
              onClick={handleClear}
              className="cursor-pointer absolute right-2 top-3.5 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500 transition-transform duration-300 hover:scale-110 hover:text-black dark:hover:text-white text-lg leading-none"
            >
              x
            </button>
          )}
        </div>
      </StaggeredLine>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <StaggeredLine key={idx} index={projectBaseIndex + 2 + idx}>
              <ProjectItem
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
            </StaggeredLine>
          ))
        ) : (
          <StaggeredLine index={projectBaseIndex + 2 + filteredProjects.length}>
            <p className="mt-8">No matching projects found.</p>
          </StaggeredLine>
        )}
      </div>
    </main>
  );
}
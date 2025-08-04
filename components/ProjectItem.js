"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectItem({ title, github, summary, skills = [], onSkillClick }) {
  return (
    <div className="mt-8">
      <div className="flex gap-2">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-lg transition-transform duration-300 hover:scale-110"
          />
        </a>
        <h3 className="">{title}</h3>
      </div>

      {summary && (
        <p className="">
          {summary}
        </p>
      )}

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              onClick={() => onSkillClick?.(skill)}
              className="bg-zinc-200 dark:bg-zinc-800 text-sm px-2 py-1 rounded-md transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

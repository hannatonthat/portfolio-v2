"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectItem({ image, title, github, summary, skills = [] }) {
  return (
    <div className="mt-8">
      {image && (
        <Image
          src={image}
          alt=""
          width="40"
          height="40"
          className="object-contain"
        />
      )}

      <div className="flex gap-2">
        <h3 className="">{title}</h3>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-3"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
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
              className="bg-zinc-200 dark:bg-zinc-800 text-sm px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

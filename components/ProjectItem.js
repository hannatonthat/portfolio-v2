import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function ProjectItem({ image, title, github, devpost, summary = [], skills = [] }) {
  return (
    <div className="">
      {image && (
        <Image
          src={image}
          alt=""
          width="40"
          height="40"
          className="object-contain mb-2"
        />
      )}

      <div className="flex gap-2">
        <h3 className="">{title}</h3>

        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-1"
          >
            <FontAwesomeIcon icon={faGithub} className="text-black text-xl" />
          </a>
        )}

        {github && (
          <a 
            href={devpost} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-1"
          >
            <FontAwesomeIcon icon={faLaptopCode} className="text-black text-xl" />
          </a>
        )}
      </div>

      {summary.length > 0 && (
        <ul className="list-disc list-inside">
          {summary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-black bg-gray-200 text-sm px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

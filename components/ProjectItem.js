import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectItem({ image, title, github, summary = [], skills = [] }) {
  return (
    <div className="">
      {image && (
        <img
          src={image}
          className="w-10 h-10 object-contain mb-2"
        />
      )}

      <h3 className="">{title}</h3>

      {github && (
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-1"
        >
          <FontAwesomeIcon icon={faGithub} className="text-black w-5 h-5" />
        </a>
      )}

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
              className="bg-gray-100 text-sm text-gray-800 px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

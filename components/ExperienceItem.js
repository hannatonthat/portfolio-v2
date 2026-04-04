import Image from "next/image";
import Link from "next/link";

export default function ExperienceItem({ image, company, companyLink, title }) {
  return (
    <li className="list-none">
      <div className="flex items-center gap-4">
        {image && (
          <a href={companyLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt=""
              width={56}
              height={56}
              className="h-11 w-11 shrink-0 rounded-xl object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </a>
        )}
        <div>
          <h3>{company}</h3>
          <p>{title}</p>
        </div>
      </div>
    </li>
  );
}

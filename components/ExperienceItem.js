import Image from "next/image";

export default function ExperienceItem({ image, company, companyLink, title }) {
  return (
    <li className="list-disc list-inside">
      <span className="">{title}</span>
      <Image
        src={image}
        alt=""
        width={20}
        height={20}
        className="inline-block object-contain rounded-lg mx-2 h-5 w-5 align-middle"
      />
      <a
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {company}
      </a>
    </li>
  );
}

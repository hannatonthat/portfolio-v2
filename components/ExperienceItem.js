import Image from "next/image";

export default function ExperienceItem({ image, company, title, date, location, summary = [] }) {
  return (
    <div className="">
      {image && (
        <Image
          src={image}
          alt=""
          width="40"
          height="40"
          className="object-contain mb-2 rounded-full"
        />
      )}

      <h3 className="">{company}</h3>
      <p className="">{title}</p>
      <p className="">{date}</p>
      <p className="">{location}</p>

      {summary.length > 0 && (
        <ul className="list-disc list-inside">
          {summary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

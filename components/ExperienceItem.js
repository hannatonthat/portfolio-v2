import Image from "next/image";

export default function ExperienceItem({ image, company, title, date, location, summary = [] }) {
  return (
    <div className="flex gap-4">
      {image && (
        <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
          <Image
            src={image}
            alt=""
            width="40"
            height="40"
            className="object-contain rounded-full"
          />
        </div>
      )}
      <div className="mb-8">
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
    </div>
  );
}

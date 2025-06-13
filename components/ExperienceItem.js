import Image from "next/image";

export default function ExperienceItem({ image, company, title, date, location, summary = [] }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="mt-1 w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-1 flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

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

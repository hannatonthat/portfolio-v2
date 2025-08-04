import Image from "next/image";

export default function ExperienceItem({image, company, title, date, location}) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="mt-1">
          <Image
            src={image}
            alt=""
            width={48}
            height={48}
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="mr-4 mb-4 flex justify-between items-start w-full">
          <div className="flex-grow">
            <p className="!m-0 font-bold">{company}</p>
            <p className="!m-0 italic">{title}</p>
          </div>
          <div className="text-right">
            <p className="!m-0">{date}</p>
            <p className="!m-0 italic">{location}</p>
          </div>
        </div>
    </div>
  );
}

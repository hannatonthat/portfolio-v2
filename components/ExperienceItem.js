export default function ExperienceItem({ image, company, title, date, location, summary = [] }) {
  return (
    <div className="">
      {image && (
        <img
          src={image}
          className="w-10 h-10 object-contain mb-2 rounded-full"
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

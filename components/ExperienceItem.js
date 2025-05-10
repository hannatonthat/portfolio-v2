export default function ExperienceItem({ company, title, summary = [] }) {
  return (
    <div className="">
      <h3 className="">{company}</h3>
      <p className="">{title}</p>

      {summary.length > 0 && (
        <ul className="">
          {summary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

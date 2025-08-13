import React from "react";

const experiences = [
  {
    title: "Business Analyst Intern",
    company: "Aspen Technology",
    date: "Jan 2024 - Apr 2024",
    description: [
      "Performed a competitive analysis study on 5 multivariate data analysis tools to understand feature functions with customer requirements",
      "Delivered actionable insights to optimize resource allocation across various industries through market research and analysis, with a potential 15% increase in total revenue",
      "Collaborated with cross-functional stakeholders (PMs, DSs) to evaluate collaboration workflows and improve product strategy for olefin engineering software",
    ],
    technologies: ["Excel", "PowerPoint", "Market Research", "Stakeholder Management"],
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    date: "Jun 2023 - Jul 2023",
    description: [
      "Engineered an automated, scalable data pipeline architecture in Java, migrating from Apache Cassandra to AWS S3, implementing custom Parquet conversion algorithms and multithreading, improving data migration efficiency by 90%",
      "Led daily stand-ups for a team of 8, ensuring project milestones were met on time. Presented the final solution to Executive Directors, earning recognition for its impact on data management",
    ],
    technologies: ["Java", "AWS S3", "Apache Cassandra", "Parquet", "Multithreading"],
  },
];

const boxStyle = {
  transition: 'opacity 0.5s, transform 0.5s',
  opacity: 1,
  transform: 'translateY(0px)',
};
const badgeClass = "px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block";

export const Timeline = () => {
  const titleClass = "m-0 text-lg font-bold text-amber-400";
  const companyClass = "text-base text-amber-100";
  const dateClass = "text-sm mb-1 text-amber-100";
  const listClass = "m-0 list-disc pl-5 text-amber-100";

  return (
    <div className="relative pl-10 lato-regular">
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-200 rounded" />
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative mb-10">
          <div className="absolute -left-2 top-2 w-4 h-4 bg-conic/decreasing from-violet-700 via-lime-400 to-violet-700 transition rounded-full border-2 border-white shadow-rose-950" />
          <div className="ml-8">
            <h3 className={titleClass}>{exp.title}</h3>
            <span className={companyClass}>{exp.company}</span>
            <div className={dateClass}>{exp.date}</div>
            <ul className={listClass}>
              {exp.description.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
            {exp.technologies && (
              <div className="flex flex-wrap gap-2 mt-3" style={boxStyle}>
                {exp.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className={badgeClass}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
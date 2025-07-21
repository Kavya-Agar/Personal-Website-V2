import React from "react";

const experiences = [
    {
        title: "Business Analyst Intern",
        company: "Aspen Technology",
        date: "Jan 2024 - Apr 2024",
        description: [
            "Developed scalable web applications using React and Node.js.",
            "Collaborated with cross-functional teams to deliver features.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "JPMorgan Chase & Co.",
        date: "Jun 2023 - Jul 2023",
        description: [
            "Built responsive UI components and improved site performance.",
            "Implemented accessibility best practices.",
        ],
    },
];

export const Timeline = () => {
    return (
        <div className="relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-200 rounded" />
            {experiences.map((exp, idx) => (
                <div key={idx} className="relative mb-10">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-conic/decreasing from-violet-700 via-lime-400 to-violet-700 transition rounded-full border-2 border-white shadow-rose-950" />
                    <div className="ml-8">
                        <h3 className="m-0 text-lg text-amber-400 font-bold">{exp.title}</h3>
                        <span className="text-amber-100 text-base">{exp.company}</span>
                        <div className="text-amber-100 text-sm mb-1">{exp.date}</div>
                        <ul className="m-0 text-amber-100 list-disc pl-5">
                            {exp.description.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
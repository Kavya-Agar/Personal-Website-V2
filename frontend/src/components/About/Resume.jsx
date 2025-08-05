import { GrDocumentUser } from "react-icons/gr";

export const Resume = ({ enabled }) => {
  return (
    <a
      href="https://drive.google.com/file/d/1yjXL089_K-2ya0a3UqECIs09KQ6Z97tW/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center hover:text-amber-400 ${enabled ? "text-amber-400" : "text-amber-100"}`}
    >
      <GrDocumentUser className="mr-2" />
      <span className="text-sm">resume</span>
    </a>
  );
};

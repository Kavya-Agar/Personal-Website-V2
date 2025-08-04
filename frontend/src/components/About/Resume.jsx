import { GrDocumentUser } from "react-icons/gr";

export const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1yjXL089_K-2ya0a3UqECIs09KQ6Z97tW/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-amber-100 hover:text-amber-800"
    >
      <GrDocumentUser className="mr-2" />
      <span className="text-sm">resume</span>
    </a>
  );
};

import { GrDocumentUser } from "react-icons/gr";
import Resume_pdf from "../../assets/KA Resume SWE.pdf";

export const Resume = ({ enabled }) => {
  return (
    <a
      href={Resume_pdf}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center hover:text-amber-400 ${enabled ? "text-amber-400" : "text-amber-100"}`}
    >
      <GrDocumentUser className="mr-2" />
      <span className="text-sm">resume</span>
    </a>
  );
};

import { FaLinkedinIn } from "react-icons/fa";

export const Linkedin = ({enabled}) => {
  return (
      <a
        href="https://www.linkedin.com/in/kavya-agar/"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center hover:text-amber-400 ${enabled ? "text-amber-400" : "text-amber-100"}`}
      >
        <FaLinkedinIn className="mr-2" />
        <span className="text-sm">linkedin</span>
      </a>
  );
};

import { FaLinkedinIn } from "react-icons/fa";

export const Linkedin = () => {
  return (
      <a
        href="https://www.linkedin.com/in/kavya-agar/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-amber-100 hover:text-amber-400"
      >
        <FaLinkedinIn className="mr-2" />
        <span className="text-sm">linkedin</span>
      </a>
  );
};

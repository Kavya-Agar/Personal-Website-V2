import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

export const FooterBar = ({ enabled }) => {
  const textColor = enabled ? "text-amber-400" : "text-amber-100";

  return (
    <footer className={`w-full ${textColor} py-4 flex flex-col bg-transparent backdrop-filter backdrop-blur-2xl items-center justify-center`}>
      <div className={`text-sm mt-1 opacity-70 lato-black ${textColor}`}>
        © {new Date().getFullYear()} Kavya Agar. All rights reserved.
      </div>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://github.com/Kavya-Agar"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition hover:text-amber-400 ${textColor}`}
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kavya-agar/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition hover:text-amber-400 ${textColor}`}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://drive.google.com/file/d/1yjXL089_K-2ya0a3UqECIs09KQ6Z97tW/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition hover:text-amber-400 ${textColor}`}
        >
          <GrDocumentUser />
        </a>
      </div>
    </footer>
  );
};

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

export const FooterBar = () => {
  return (
    <footer className="w-full text-amber-100 py-4 flex flex-col bg-transparent backdrop-filter backdrop-blur-2xl items-center justify-center">
      <div className="text-sm mt-1 opacity-70 lato-black">
        © {new Date().getFullYear()} Kavya Agar
      </div>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://github.com/Kavya-Agar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kavya-agar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://drive.google.com/file/d/1yjXL089_K-2ya0a3UqECIs09KQ6Z97tW/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition"
        >
          <GrDocumentUser />
        </a>
      </div>
    </footer>
  );
};

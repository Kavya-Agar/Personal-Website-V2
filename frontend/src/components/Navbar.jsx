import logo from "../assets/k_logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import GlassSurface from "../blocks/Components/GlassSurface/GlassSurface";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About Me" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <>
      <GlassSurface
        width="95%"
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        blur={11}
        mixBlendMode="screen"
        borderRadius={50}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 border border-emerald-800"
      >
        <nav className="flex items-center justify-between px-8 py-4 w-full">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 rounded-full mr-4"
              />
            </Link>
            <div className="chewy-regular text-2xl text-shadow-lg text-amber-100 -skew-6">
              Kavya
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-md text-shadow-lg lato-bold text-amber-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-amber-400 hover:scale-110 transition ${
                  location.pathname === link.to
                    ? "lato-black scale-120 transition text-amber-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Kavya-Agar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition lato-bold text-4xl text-amber-100"
            >
              <FiGithub />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-100 text-2xl mr-2"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </GlassSurface>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-24 right-0 h-60 w-44 bg-emerald-950 rounded-l-2xl border border-emerald-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-8 h-full space-y-6 lato-bold text-amber-100">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-amber-400 transition ${
                location.pathname === link.to ? "text-amber-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Kavya-Agar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-amber-400 transition text-4xl"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </>
  );
}

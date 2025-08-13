import logo from "../assets/k_logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { FiGithub } from "react-icons/fi";
import GlassSurface from "../blocks/Components/GlassSurface/GlassSurface";

export default function Navbar({ enabled, setEnabled }) {
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About Me" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
  ];
  return (
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 border ${
        enabled ? "border-black" : "border-emerald-800"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-4 w-full">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="md:flex h-12 w-12 rounded-full mr-4"
            />
          </Link>
          <div
            className={`chewy-regular text-2xl text-shadow-lg ${
              enabled ? "text-amber-400" : "text-amber-100"
            } -skew-6`}
          >
            Kavya
          </div>
        </div>

        <div
          className={`flex items-center space-x-8 text-md text-shadow-lg lato-bold ${
            enabled ? "text-amber-400" : "text-amber-100"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-amber-400 hover:scale-110 transition ${
                location.pathname === link.to
                  ? `lato-black scale-120 transition ${
                      enabled ? "text-amber-400" : "text-amber-400"
                    }`
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
            className={`hover:text-amber-400 hover:scale-110 transition lato-bold text-4xl ${
              enabled ? "text-amber-400" : "text-amber-100"
            }`}
          >
            <FiGithub />
          </a>
        </div>
      </nav>
    </GlassSurface>
  );
}

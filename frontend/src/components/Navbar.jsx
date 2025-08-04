import logo from "../assets/avocado.avif";
import { Link, useLocation } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import GlassSurface from "../blocks/Components/GlassSurface/GlassSurface";
import Orb from "../blocks/Backgrounds/Orb/Orb";

export default function Navbar() {
  const [enabled, setEnabled] = useState(false);
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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 border border-emerald-800"
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
          <div className="chewy-regular text-2xl text-shadow-lg text-amber-100 -skew-6">
            Kavya
          </div>
        </div>

        <div className="mx-4">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-amber-100 transition data-checked:bg-amber-400"
          >
            <span className="size-4 translate-x-1 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 transition group-data-checked:translate-x-6" />
          </Switch>
        </div>

        <div className="flex items-center space-x-8 text-md text-shadow-lg lato-bold text-amber-100">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-amber-400 hover:scale-110 transition ${
                location.pathname === link.to
                  ? "text-amber-400 lato-black scale-120 transition"
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
            className="hover:text-amber-400 hover:scale-110 transition lato-bold text-amber-100 text-4xl"
          >
            <FiGithub />
          </a>
        </div>
      </nav>
    </GlassSurface>
  );
}

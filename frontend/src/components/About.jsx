import React from "react";
import { Image } from "./About/Image.jsx";
import { Text } from "./About/Text.jsx";
import { Skills } from "./About/Skills.jsx";
import { Linkedin } from "./About/Linkedin.jsx";
import { Resume } from "./About/Resume.jsx";
import { Email } from "./About/Email.jsx";
import { Spotify } from "./About/Spotify.jsx";
import { Instagram } from "./About/instagram.jsx";

export default function About({ enabled }) {
  return (
    <div className="min-h-screen w-full pt-20">
      <div className="flex justify-center mt-8 mb-4">
        <div className="w-full max-w-4xl px-4">
          <div className={`text-7xl text-center md:text-left lato-black ${enabled ? "text-amber-400" : "text-amber-100"}`}>
            About Me
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-4">
        <div
          className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-4xl rounded-3xl shadow-2xl p-8 md:p-12 border bg-emerald-950 border-emerald-800">
          <div className="flex flex-col items-center gap-4">
            <Image />
            <div className="flex flex-col space-y-2 mt-6">
              <div className="text-amber-100 lato-black text-md mb-2">
                Contacts
              </div>
              <Email />
              <Linkedin />
              <Resume />
              <Instagram />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <Text enabled={enabled} />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-4 mt-8">
        <div className="items-start justify-center gap-12 w-full max-w-4xl rounded-3xl shadow-2xl p-8 md:p-12 border bg-emerald-950 border-emerald-800">
          <div className="flex items-start justify-center text-amber-100 text-5xl lato-black mb-3">
            Skills
          </div>
          <Skills />
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-4 mt-8">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-7xl rounded-3xl shadow-2xl p-8 md:p-12 border bg-emerald-950 border-emerald-800">
          <Spotify />
        </div>
      </div>
    </div>
  );
}

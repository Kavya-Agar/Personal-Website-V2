import React from "react";
import TypeWriter from "./Typewriter.jsx";

const typeWriter = [
  "Software Engineer",
  "Runner",
  "Trackstar",
  "Traveler",
  "Cinephile",
  "Learner",
  "Seattlite",
  "Chicagoan",
  "F1 Fanatic",
  "Hiker",
  "Storyteller",
];

export default function Typing() {
  return (
    <div className="text-center px-4">
      <h1 className="lato-black text-5xl sm:text-6xl md:text-7xl text-amber-100 leading-tight whitespace-nowrap">
        Hi, I'm Kavya!
      </h1>
      <p className="mt-3 text-xl sm:text-2xl lato-black text-amber-100">
        I'm a <TypeWriter data={typeWriter} />
      </p>
    </div>
  );
}

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

export default function Typing({ enabled }) {
  return (
    <>
      <div className={`flex items-center justify-center text-7xl lato-black ${enabled ? "text-amber-400" : "text-amber-100"}`}>
        Hi, I'm Kavya!
      </div>
      <div className={`flex items-center justify-center text-2xl lato-black ${enabled ? "text-amber-400" : "text-amber-100"}`}>
        <p>
          I'm a <TypeWriter data={typeWriter} />
        </p>
      </div>
    </>
  );
}
import DarkVeil from "../blocks/Backgrounds/DarkVeil/DarkVeil.jsx";
import FaultyTerminal from "../blocks/Backgrounds/FaultyTerminal/FaultyTerminal.jsx";
import Orb from "../blocks/Backgrounds/Orb/Orb.jsx";
import GlassSurface from "../blocks/Components/GlassSurface/GlassSurface.jsx";
import Typing from "./Homepage/Typing.jsx";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-12">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <Typing />
      </div>
    </div>
  );
}

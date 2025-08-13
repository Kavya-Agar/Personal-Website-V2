import Typing from "./Homepage/Typing.jsx";

export default function Home() {
  return (
    <main className="relative w-full min-h-[100svh] md:min-h-screen overflow-hidden">
      <div className="grid place-items-center min-h-[100svh] md:min-h-screen">
        <Typing />
      </div>
    </main>
  );
}

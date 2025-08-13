import { useRef } from "react";
import { FaSpotify } from "react-icons/fa";

const playlists = [
  {
    title: "desi vibes.",
    description: "because being indian is the fit.",
    src: "https://open.spotify.com/embed/playlist/0chVTVJRW0OsjrdJv5zRl7?utm_source=generator",
  },
  {
    title: "you're hot, cupcake",
    description: "driving fast is free therapy",
    src: "https://open.spotify.com/embed/playlist/2B63SRmZOuyR1gi1TvGTjk?utm_source=generator",
  },
  {
    title: "desi hip hop",
    description: "underground kings wear the biggest crowns",
    src: "https://open.spotify.com/embed/playlist/3cafqD6BaTFXBNvwW0nUDl?utm_source=generator",
  },
  {
    title: "how to lose yourself in 10 days",
    description: '"with you, i feel at peace"',
    src: "https://open.spotify.com/embed/playlist/0HYmJSVTmE21upfns4r05L?utm_source=generator",
  },
  {
    title: "taylornation",
    description: "have to be a little performative",
    src: "https://open.spotify.com/embed/playlist/4NfzBXkL3VIBD3z0MOOGIu?utm_source=generator",
  },
];

export const Spotify = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center text-amber-100 text-5xl lato-black mb-3">
        <a
          href="https://open.spotify.com/user/yl13p1w8blgq8w320k2fsedzs?si=63e50f30643c45f8"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-amber-100 hover:text-amber-400 `}
        >
          <FaSpotify className="mr-2" />
          <span>Music</span>
        </a>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto pb-4 w-full max-w-7xl scrollbar-thin scrollbar-thumb-emerald-800 scrollbar-track-emerald-950"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {playlists.map((playlist, idx) => (
          <div
            key={playlist.title}
            className="flex-shrink-0 w-[90vw] max-w-xs sm:w-[350px] scroll-snap-align-center"
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="text-center text-lg lato-black text-amber-400 mb-0.5">
              {playlist.title}
            </div>
            <div className="text-center text-sm lato-black text-amber-100 mb-3">
              {playlist.description}
            </div>
            <iframe
              title={playlist.title}
              src={playlist.src}
              width="100%"
              height="400"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

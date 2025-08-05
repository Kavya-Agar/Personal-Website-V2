import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor({ enabled }) {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);
  
  const bgClass = enabled
    ? "bg-yellow-100" 
    : "bg-rose-950"; 
  
  const borderClass = enabled
    ? "border-rose-950"
    : "border-yellow-100";
  
  const colorClass = enabled
    ? "bg-yellow-100 border-rose-950"
    : "bg-rose-950 border-yellow-100";

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        pointerEvents: "none",
        transform: `translate(-50%, -50%) scale(${pressed ? 1.2 : 1})`,
        zIndex: 9999,
      }}
      className={`
        w-5 h-5
        rounded-full 
        border-2 
        mix-blend-difference
        transition-transform 
        duration-150 
        ease-out
        ${colorClass}
      `}
    />
  );
}

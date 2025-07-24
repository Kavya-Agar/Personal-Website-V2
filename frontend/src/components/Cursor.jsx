import React, { useEffect, useRef, useCallback } from "react";

 const WaterDropIcon = (props) => ( 
 <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"#fffbeb"}  viewBox="0 0 24 24" {...props} >
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M12 22c4.41 0 8-3.59 8-8 0-7.49-7.2-11.69-7.5-11.87a.98.98 0 0 0-.99 0C11.2 2.3 4.01 6.5 4.01 14c0 4.41 3.59 8 8 8Zm0-17.81c1.52 1.03 6 4.52 6 9.81 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-5.28 4.48-8.78 6-9.81"></path>
</svg>
);

export default function CustomCursor() {
  const dotRef = useRef(null);
  const dropletRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const droplet = useRef({ x: 0, y: 0 });

  const prevDroplet = useRef({ x: 0, y: 0 });
  const frame = useRef(null);
  const dropletOffset = 24; // distance behind the dot, in pixels

  const lerp = useCallback((a, b, n) => (1 - n) * a + n * b, []);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      const dot = dotRef.current;
      const dropletEl = dropletRef.current;

      // Dot—tracks exactly
      if (dot) {
        dot.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
      }

      // Droplet—lerp toward mouse, then apply offset "behind"
      prevDroplet.current.x = droplet.current.x;
      prevDroplet.current.y = droplet.current.y;

      droplet.current.x = lerp(droplet.current.x, mouse.current.x, 0.22);
      droplet.current.y = lerp(droplet.current.y, mouse.current.y, 0.22);

      // Direction from droplet to cursor
      const dx = mouse.current.x - droplet.current.x;
      const dy = mouse.current.y - droplet.current.y;
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = angleRad * (180 / Math.PI) + 90;

      // Offset for the droplet (behind the dot)
      const offsetX = -Math.cos(angleRad) * dropletOffset;
      const offsetY = -Math.sin(angleRad) * dropletOffset;

      // Position the droplet at "behind" offset
      if (dropletEl) {
        dropletEl.style.transform = `translate3d(${droplet.current.x + offsetX - 15}px, ${droplet.current.y + offsetY - 15}px, 0) rotate(${angleDeg}deg)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame.current);
    };
  }, [lerp]);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-amber-100 pointer-events-none"
      />
      {/* Droplet follower (behind the dot) */}
      <div
        ref={dropletRef}
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          width: 30,
          height: 30,
          transformOrigin: "center bottom",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform",
        }}
      >
        <WaterDropIcon />
      </div>
    </>
  );
}

"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const CustomCursor = function () {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed -top-2 -left-1 w-3 h-3 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
    />
  );
};

export default CustomCursor;

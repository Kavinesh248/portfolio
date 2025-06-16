import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatTime = (value) => String(value).padStart(2, "0");

import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// const modalRef = useRef(null);
// const [isDragging, setIsDragging] = useState(false);
// const [startY, setStartY] = useState(0);
// const [currentY, setCurrentY] = useState(0);
// const [isChatOpen, setIsChatOpen] = useState(false);

// const handleStart = (e) => {
//   if (window.innerWidth >= 768) return; // Skip on md+ screens
//   const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//   setStartY(clientY);
//   setIsDragging(true);
// };

// const handleMove = (e) => {
//   if (!isDragging || window.innerWidth >= 768) return;
//   const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//   const delta = clientY - startY;
//   if (delta < 0) return;
//   setCurrentY(delta);
//   gsap.to(modalRef.current, { y: delta, duration: 0 });
// };

// const handleEnd = () => {
//   if (window.innerWidth >= 768) return;
//   setIsDragging(false);
//   if (currentY > 100) {
//     gsap.to(modalRef.current, {
//       y: "100%",
//       duration: 0.3,
//       ease: "power2.out",
//       onComplete: () => {
//         setIsChatOpen(false);
//         setCurrentY(0);
//       },
//     });
//   } else {
//     gsap.to(modalRef.current, {
//       y: 0,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//     setCurrentY(0);
//   }
// };

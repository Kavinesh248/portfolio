// components/FlickerText.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FlickerText = ({
  children,
  className = "",
  animationType = "subtle",
  repeatDelay = 0.8,
}) => {
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Clear any existing animations
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Animation functions
    const createSubtleFlicker = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay });

      tl.to(element, {
        duration: 0.05,
        opacity: 0.3,
        ease: "power2.inOut",
      })
        .to(element, {
          duration: 0.05,
          opacity: 1,
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.03,
          opacity: 0.1,
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.07,
          opacity: 1,
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.02,
          opacity: 0.6,
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.08,
          opacity: 1,
          ease: "power2.inOut",
        });

      return tl;
    };

    const createIntenseFlicker = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: repeatDelay * 0.6 });

      tl.to(element, { duration: 0.01, opacity: 0.1 })
        .to(element, { duration: 0.02, opacity: 1 })
        .to(element, { duration: 0.01, opacity: 0.3 })
        .to(element, { duration: 0.03, opacity: 1 })
        .to(element, { duration: 0.01, opacity: 0.05 })
        .to(element, { duration: 0.02, opacity: 1 })
        .to(element, { duration: 0.01, opacity: 0.7 })
        .to(element, { duration: 0.04, opacity: 1 })
        .to(element, { duration: 0.01, opacity: 0.2 })
        .to(element, { duration: 0.02, opacity: 1 });

      return tl;
    };

    const createGlowFlicker = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay });

      tl.to(element, {
        duration: 0.05,
        textShadow:
          "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
        ease: "power2.inOut",
      })
        .to(element, {
          duration: 0.1,
          textShadow: "none",
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.03,
          textShadow: "0 0 8px currentColor, 0 0 16px currentColor",
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.12,
          textShadow: "none",
          ease: "power2.inOut",
        });

      return tl;
    };

    const createGlitchFlicker = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay });

      // Main flicker
      tl.to(element, { duration: 0.05, opacity: 0.3 })
        .to(element, { duration: 0.05, opacity: 1 })
        .to(element, { duration: 0.03, opacity: 0.1 })
        .to(element, { duration: 0.07, opacity: 1 });

      // Transform glitch
      tl.to(
        element,
        {
          duration: 0.02,
          x: -1,
          ease: "power2.inOut",
        },
        0.1
      )
        .to(element, {
          duration: 0.02,
          x: 1,
          ease: "power2.inOut",
        })
        .to(element, {
          duration: 0.02,
          x: 0,
          ease: "power2.inOut",
        });

      return tl;
    };

    // Select animation based on type
    switch (animationType) {
      case "intense":
        timelineRef.current = createIntenseFlicker();
        break;
      case "glow":
        timelineRef.current = createGlowFlicker();
        break;
      case "glitch":
        timelineRef.current = createGlitchFlicker();
        break;
      default:
        timelineRef.current = createSubtleFlicker();
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [animationType, repeatDelay]);

  // const handleMouseEnter = () => {
  //   gsap.to(textRef.current, {
  //     duration: 0.3,
  //     scale: 1.05,
  //     ease: "power2.out",
  //   });
  // };

  // const handleMouseLeave = () => {
  //   gsap.to(textRef.current, {
  //     duration: 0.3,
  //     scale: 1,
  //     ease: "power2.out",
  //   });
  // };

  return (
    <span
      ref={textRef}
      className={`flicker-text ${className}`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}
    </span>
  );
};

export default FlickerText;

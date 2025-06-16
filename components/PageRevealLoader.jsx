"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(CSSPlugin, TextPlugin);

const PageRevealLoader = ({ onFinish }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(count);
        setCounter(100);
        reveal();
        return 100;
      });
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        onFinish?.();
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: "expo.out",
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: "expo.out",
        duration: 0.7,
        delay: 0.3,
        opacity: 0,
      })
      .fromTo(
        ".main-content",
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .to(".follow", {
        opacity: 0,
        duration: 0,
      });
  };

  return (
    <div className="loader-wrapper">
      <div className="loading">
        <div className="follow"></div>

        <div className="intro-text text-background-primary text-center">
          <p className="text-5xl md:text-8xl mb-3">Kavinesh</p>
          <p id="text" className="text-3xl md:text-5xl h-4"></p>
        </div>

        <div
          className="progress-bar hide"
          style={{ width: counter + "%" }}
        ></div>

        <p className="count hide">{counter}%</p>
      </div>
    </div>
  );
};

export default PageRevealLoader;

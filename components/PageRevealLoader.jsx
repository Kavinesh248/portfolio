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

/* .main-content {
    opacity: 0;
    transform: translateY(50px);
  } */

/* PageRevealLoader.css */

/* .loader-wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  } */

/* .loading {
    height: 100%;
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 5;
  }

  .follow {
    position: absolute;
    background: url("/images/cloud-img.avif") no-repeat center center;
    content: "kavinesh";
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
  }

  .intro-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    z-index: 10;
    text-align: center;
    z-index: 3;
    opacity: 0;
    transform: translateY(20px);
  } */

/* .progress-bar {
    position: absolute;
    left: 0;
    background-color: #fff;
    height: 2px;
    transition: 0.4s ease-out;
  }

  .count {
    position: absolute;
    font-size: 130px;
    color: #fff;
    transform: translateY(-15px);
    font-weight: 500;
  } */

/* .content {
    height: 100%;
    width: 0;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #121212;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: #fff;
  }

  .content .title-lines {
    text-align: center;
    font-size: 104px;
    opacity: 0;
    display: none;
    font-weight: 500;
    margin: 0;
  } */

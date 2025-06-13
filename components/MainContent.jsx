"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ChatUI from "./ChatUI";
import Link from "next/link";
import ChatInput from "./ChatInput";

const MainContent = function () {
  // const modalRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startY, setStartY] = useState(0);
  // const [currentY, setCurrentY] = useState(0);
  // const [isChatOpen, setIsChatOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    inputRef.current?.blur();

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("API error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops! Something went wrong." },
      ]);
    }
  };

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-60px)]">
      <div className="h-[calc(100vh-60px)]">
        <section className="text-background-primary common-padding">
          <div className="heading-primary">
            <h1>
              Kavinesh -{" "}
              <span className="border-b-4 border-background-primary/60">
                Frontend Developer
              </span>
            </h1>
            <h1>and UI/UX Designer</h1>
          </div>

          <p className="description-primary">
            I craft clean, responsive interfaces with a focus on performance and
            usability. Blending frontend development and UI/UX, I deliver smooth
            digital experiences.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <a href="">
              <button className="cta-btn flex-center gap-2 bg-background-primary text-black-primary">
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>

            <button
              onClick={() => setIsChatOpen(true)}
              className="md:hidden cta-btn gap-2 border border-background-primary shadow-sm text-background-primary"
            >
              Chat with AI 🤖
            </button>
          </div>
        </section>
      </div>

      {isChatOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-30 transition-opacity duration-300"
          onClick={() => setIsChatOpen(false)}
        />
      )}
      <article
        className={cn(
          "bg-background-primary flex flex-col h-[calc(100vh-60px)] z-30 justify-between fixed md:relative md:top-0 w-full rounded-t-4xl md:rounded-none transition-transform duration-300",
          isChatOpen
            ? "translate-y-0 md:translate-y-0"
            : "translate-y-full md:translate-y-0"
        )}
      >
        <div className="flex-1 overflow-y-auto">
          <ChatUI
            messages={messages}
            handleSubmit={handleSubmit}
            input={input}
            setInput={setInput}
          />
        </div>

        <ChatInput
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          ref={inputRef}
        />
      </article>
    </section>
  );
};

export default MainContent;

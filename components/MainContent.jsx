"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ChatUI from "./ChatUI";
import ChatInput from "./ChatInput";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainContent = function () {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      ".heading-primary h1",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    ).fromTo(
      ".description-primary",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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
    <section
      className="relative grid grid-cols-1 md:grid-cols-2"
      style={{ height: "calc(var(--vh) * 100 - 60px)" }}
    >
      <div className="h-[calc(100dvh-70px)]">
        <section className="text-background-primary common-padding">
          <div className="heading-primary">
            <h1>
              Kavinesh –{" "}
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

          <div className="flex items-center relative gap-3 mt-8 md:mt-10">
            <button className="relative flex items-center justify-center gap-2 px-6 py-2  bg-white text-black overflow-hidden group transition-colors duration-300">
              <span className="absolute top-full h-full w-full bg-neutral-200	z-0 transition-all duration-500 ease-in-out group-hover:top-0" />

              <span className="relative z-10">Contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 relative z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

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
          "bg-background-primary flex items-center flex-col h-[calc(100dvh-70px)]  z-30 fixed md:relative w-full md:top-0 md:rounded-none rounded-t-4xl",
          hasMounted && "transition-transform duration-300",
          isChatOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"
        )}
      >
        <div className="w-24 bg-black-primary p-1 mt-3 md:hidden rounded-full" />

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

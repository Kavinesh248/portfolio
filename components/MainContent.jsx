"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ChatUI from "./ChatUI";
import ChatInput from "./ChatInput";
import Room3d from "./cube/index";

function MainContent() {
  const inputRef = useRef(null);
  const router = useRouter();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(".heading-primary", {
      filter: "blur(0px)",
      delay: 0.3,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(".description-primary", {
        filter: "blur(0px)",
        duration: 0.2,
        ease: "power2.out",
      })
      .to(".btn-group", {
        filter: "blur(0px)",
        duration: 0.3,
        ease: "power2.out",
      });
  }, []);

  useGSAP(() => {
    const glitchElement = document.querySelector(".glitch");

    if (!glitchElement) return;

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    glitchTimeline
      .to(glitchElement, {
        clipPath: `polygon(
          0px 29%,
          44% 29%,
          44% 83%,
          94% 83%,
          94% 56%,
          11% 56%,
          11% 64%,
          94% 64%,
          94% 70%,
          88% 70%,
          88% 32%,
          18% 32%,
          18% 96%,
          10% 96%,
          10% 62%,
          9% 62%,
          9% 84%,
          68% 84%,
          68% 50%,
          52% 50%,
          52% 55%,
          35% 55%,
          35% 87%,
          25% 87%,
          25% 39%,
          15% 39%,
          15% 29%,
          52% 29%,
          52% 88%
        )`,
        duration: 0.3,
        ease: "power2.inOut",
      })
      // Glitch OFF
      .to(glitchElement, {
        clipPath: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
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
      className="relative grid z-50 grid-cols-1 md:grid-cols-2"
      style={{ height: "calc(var(--vh) * 100 - 60px)" }}
    >
      <div className="h-[calc(100dvh-70px)] relative">
        <section className="text-background-primary z-20 common-padding">
          <div className="heading-primary">
            <h1 className="leading-[1.5]">
              Kavinesh –{" "}
              <span className="glitch border-b-4 border-background-primary/60">
                Frontend Developer
              </span>
            </h1>
            <h1> UI/UX Designer</h1>
          </div>

          <p className="description-primary">
            I craft clean, responsive interfaces with a focus on performance and
            usability. Blending frontend development and UI/UX, I deliver smooth
            digital experiences.
          </p>

          <div className="flex items-center btn-group relative gap-3 mt-8 md:mt-10">
            <button
              className="relative flex cta-btn bg-white text-black group"
              onClick={() => router.push("/contact")}
            >
              <span className="absolute top-full h-full w-full bg-neutral-200	z-0 transition-all duration-500 ease-in-out group-hover:top-0" />

              <span className="relative z-10">Contact</span>
              <Image
                src="/images/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className="z-10"
              />
            </button>

            <button
              onClick={() => setIsChatOpen(true)}
              className="md:hidden cta-btn gap-2 border border-background-primary shadow-sm text-background-primary"
            >
              Chat with AI 🤖
            </button>
          </div>
        </section>
        {/* <Room3d /> */}
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
          <ChatUI messages={messages} setIsChatOpen={setIsChatOpen} />
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
}

export default MainContent;

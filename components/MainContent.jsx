"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import gsap from "gsap";
import ChatUI from "./ChatUI";

const MainContent = function () {
  // const modalRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startY, setStartY] = useState(0);
  // const [currentY, setCurrentY] = useState(0);
  // const [isChatOpen, setIsChatOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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

  return <div></div>;
};

export default MainContent;

{
  /* <section className="text-background-primary md:grid h-screen md:grid-cols-2 z-99">
<div className="w-full md:border-r-1 border-b-light py-10 px-6">
  <div>
    <h2 className="heading-primary">
      Kavinesh - Frontend Developer and UI/UX Designer
    </h2>

    <p className="description-primary text-background-primary/80 leading-[1.3]">
      I craft clean, responsive interfaces with a focus on performance and
      usability. Blending frontend development and UI/UX, I deliver smooth
      digital experiences.
    </p>

    <div className="mt-8 flex items-center gap-3">
      <button className="cta-btn bg-black-primary text-nowrap border-b-light border flex items-center gap-1">
        Connect with me
      </button>
      <button
        className="cta-btn bg-background-primary md:hidden text-black-primary"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        Chat with AI
      </button>
    </div>
  </div>
</div>

<div
  className={cn(
    "bg-background-primary flex flex-col transition-transform duration-300 ease-out justify-between items-center fixed top-40 bottom-0 w-full md:static md:rounded-t-none rounded-t-3xl",
    isChatOpen ? "" : "translate-y-full md:translate-y-0"
  )}
>
  <ChatUI
  messages={messages}
  input={input}
  handleSubmit={handleSubmit}
  setInput={setInput}
  cn={cn}
  />
  <div className="w-full fixed bottom-0 md:bottom-15 bg-black-primary border-t border-black-primary px-4 py-2">
    <form
      className="relative w-full h-full flex items-center"
      onSubmit={handleSubmit}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="w-full px-3 py-3 rounded-md text-background-primary text-lg border border-background-primary placeholder:text-background-primary placeholder:text-lg"
        placeholder="Send a message..."
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z" />
        </svg>
      </button>
    </form>
  </div>
</div>
</section> */
}

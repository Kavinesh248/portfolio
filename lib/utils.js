import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatTime = (value) => String(value).padStart(2, "0");

export const requestAiResponse = async (e) => {
  e.preventDefault();
  if (!input.trim()) return;

  // Add user message to state
  setMessages((prev) => [...prev, { role: "user", content: input }]);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: data.reply },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Something went wrong." },
    ]);
  }

  setInput("");
};

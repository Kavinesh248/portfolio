// "use client";
// import { useState } from "react";

// export default function ChatBot() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMsg = { role: "user", content: input };
//     setMessages((prev) => [...prev, newMsg]);
//     setInput("");

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       body: JSON.stringify({ message: input }),
//     });
//     const data = await res.json();

//     setMessages((prev) => [
//       ...prev,
//       { role: "assistant", content: data.reply },
//     ]);
//   };

//   return (
//     <div className="p-4">
//       <div className="max-h-96 overflow-y-auto mb-4 space-y-2">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`${
//               msg.role === "user" ? "text-right" : "text-left"
//             } text-sm`}
//           >
//             <span className="bg-gray-100 p-2 rounded">{msg.content}</span>
//           </div>
//         ))}
//       </div>
//       <div className="flex gap-2">
//         <input
//           className="border px-3 py-2 w-full"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me something..."
//         />
//         <button onClick={sendMessage} className="bg-black text-white px-4 py-2">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

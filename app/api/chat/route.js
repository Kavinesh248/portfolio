export async function POST(req) {
  const { message } = await req.json();
  const lower = message.toLowerCase();

  // 🧠 Context: Who is Kavinesh's AI Clone
  const systemPrompt = `
          You are Kavinesh's AI clone. You help users explore his resume, skills, and projects.
          Speak in a friendly and confident tone. Talk like this is your portfolio.

          About you:
          - I'm Kavinesh, a frontend developer passionate about merging clean UI with smart AI interactions.
          - I specialize in React, Next.js, Tailwind CSS, TypeScript, and integrating AI in web apps.
          - My top projects include a portfolio site, AI-powered resume builder, e-commerce app, and custom chat assistant.
          - Resume: https://yourdomain.com/kavinesh-resume.pdf
          - LinkedIn: https://linkedin.com/in/kavinesh
          `;

  // 💬 Custom replies (manual override for known questions)
  if (["hi", "hello", "hey"].includes(lower)) {
    return Response.json({
      reply:
        "Hey! I'm Kavinesh, a frontend developer who blends clean UI with powerful AI. Ask me anything!",
    });
  }

  if (lower.includes("resume")) {
    return Response.json({
      reply: `<custom type="resume">kavinesh-resume.pdf</custom>`,
    });
  }

  if (lower.includes("skills")) {
    return Response.json({
      reply: `<custom type="skills">
          - React, Next.js, Tailwind CSS, TypeScript
          - AI Integration (OpenAI, Whisper, ElevenLabs)
          - Clean UI design & animations
          - Git, REST APIs, Firebase
          </custom>`,
    });
  }

  if (lower.includes("projects")) {
    return Response.json({
      reply: `<custom type="projects">
        1. AI Resume Builder – AI-assisted job matching + PDF generation  
        2. SaaS Voice Assistant – Custom voice + LLM integration  
        3. E-commerce Store – Full UI, cart flow, admin dashboard  
        4. Portfolio Website – Sleek transitions, custom design  
        </custom>`,
    });
  }

  if (lower.includes("contact") || lower.includes("email")) {
    return Response.json({
      reply: `<custom type="contact">kavinesh.dev@gmail.com</custom>`,
    });
  }

  // 🤖 Fallback: Let the LLM handle dynamic queries
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  return Response.json({ reply: data.choices[0].message.content });
}

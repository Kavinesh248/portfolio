export async function POST(req) {
  const { message } = await req.json();
  const lower = message.toLowerCase();

  // 🧠 Context: Who is Kavinesh's AI Clone
  const systemPrompt = `
          You are Kavinesh, a frontend developer. Keep responses natural and conversational.
          Don't introduce yourself unless specifically asked "who are you" or similar.
          
          About you:
          - Frontend developer specializing in React, Next.js, Tailwind CSS, TypeScript
          - Love integrating AI into web applications
          - Built projects like AI resume builder, voice assistants, e-commerce apps
          - Resume: https://portfolio-iota-ebon-99.vercel.app/kavinesh-resume.pdf
          - LinkedIn: https://linkedin.com/in/kavineshm
          
          Keep responses short and natural. Only elaborate when specifically asked for details.
          `;

  // 💬 Minimalistic custom replies
  if (["hi", "hello", "hey"].includes(lower)) {
    return Response.json({
      reply: "Hello!",
    });
  }

  if (lower.includes("how are you") || lower.includes("how's it going")) {
    return Response.json({
      reply: "I'm doing great, thanks! How can I help you?",
    });
  }

  if (lower.includes("what do you do") || lower.includes("your work")) {
    return Response.json({
      reply:
        "I'm a frontend developer. I build web apps with React and integrate AI features into them.",
    });
  }

  if (lower.includes("resume")) {
    return Response.json({
      reply: `<custom type="resume">kavinesh-resume.pdf</custom>`,
    });
  }

  if (lower.includes("skills") && !lower.includes("what")) {
    return Response.json({
      reply: `<custom type="skills">
          Frontend: React, Next.js, Tailwind CSS, GSAP, Three.js"
          Backend: Firebase, Supabase
          UI/Styling/Animations: Tailwind CSS, shadcn/ui, Material UI, GSAP
          Databases: Supabase, MySQL
          Programming Languages: TypeScript, JavaScript
          Design/No-code: Figma
          AI Integration: OpenAI GPT, Whisper API, ElevenLabs, Web Speech API
      </custom>`,
    });
  }

  if (
    lower.includes("projects") ||
    lower.includes("portfolio") ||
    lower.includes("your work") ||
    lower.includes("see your") ||
    lower.includes("works") ||
    lower.includes("share your works") ||
    lower.includes("show me") ||
    lower.includes("some work") ||
    lower.includes("some of your") ||
    lower.match(/(see|show).*work/) ||
    lower.match(/(your|some).*projects?/)
  ) {
    return Response.json({
      reply: `<custom type="projects">
      • Apple Website | Redesign – Front-end development, animations and 3D design – Own Project – 2025 – https://apple-website-one-indol.vercel.app/
      • Brainwave | Landing – Static website, front-end focused. Animations and gradient focused. – Own Project – 2025 – https://brainwave-kh6j.vercel.app/
      • thefinalprojects – Dynamic website, full-stack development, admin panel, Supabase integration – thefinalprojects – 2025 – https://www.thefinalprojects.com/dashboard
      </custom>`,
    });
  }

  if (lower.includes("contact") || lower.includes("email")) {
    return Response.json({
      reply: `<custom type="contact">kavinesh.contact@gmail.com</custom>`,
    });
  }

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
        temperature: 0.7,
        max_tokens: 150, // Limit response length
      }),
    }
  );

  const data = await response.json();
  return Response.json({ reply: data.choices[0].message.content });
}

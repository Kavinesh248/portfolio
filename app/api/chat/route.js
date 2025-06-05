export async function POST(req) {
  const { message } = await req.json();

  // Manual shortcut: if user says "resume", send custom response
  if (message.toLowerCase().includes("resume")) {
    return Response.json({
      reply: `Sure! Here's my resume: [View Resume](https://yourdomain.com/kavinesh-resume.pdf)`,
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
            content: `
                  You are Kavinesh's AI assistant. You help users understand his resume, projects, and skills.

                  Resume Summary:
                  - Frontend Developer (React, Next.js, Tailwind, TypeScript)
                  - Projects: Portfolio site, e-commerce store, admin dashboard
                  - LinkedIn: https://linkedin.com/in/kavinesh
                  - Resume: https://yourdomain.com/kavinesh-resume.pdf
          `,
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

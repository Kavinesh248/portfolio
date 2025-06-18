import Link from "next/link";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const preResponses = {
  response1: "Hey! I'm Kavinesh's Clone. Ask me anything",
  response2: () => (
    <>
      I&apos;ve got a thing for merging clean UI with{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="inline"
      >
        <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0-16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z" />
      </svg>{" "}
      AI-powered interactivity. Whether it&apos;s frontend dev, AI integration,
      or product design, I build with purpose — not just pixels.
    </>
  ),
  response3: () => (
    <>
      Prefer a minimal setup? You can always switch to the clean & simple{" "}
      <Link
        href="/work"
        className="bg-black-primary text-background-primary px-1"
      >
        vanilla experience 🍦
      </Link>
    </>
  ),
  response4: () => (
    <>
      Ask me about anything <span className="tag">/projects</span>{" "}
      <span className="tag">/skills</span> and even my{" "}
      <span className="tag">/contact info</span> or{" "}
      <span className="tag">resume/cv</span>
    </>
  ),
  response5: "keep note — this clone's not sentient (yet)",
};

export const technologies = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    items: ["Firebase", "Supabase"],
  },
  {
    category: "Databases",
    items: ["Supabase", "MySQL"],
  },
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    category: "Design/No-code",
    items: ["Figma"],
  },
  {
    category: "AI Integration",
    items: ["OpenAI GPT", "Whisper API", "ElevenLabs", "Web Speech API"],
  },
];

// constants/projects.js
export const projects = [
  {
    year: "2025",
    project: "Apple Website | Redesign",
    client: "Own Project",
    type: "Front-end development, animtations and 3d design",
    url: "https://apple-website-one-indol.vercel.app/",
  },
  {
    year: "2025",
    project: "Brainwave | Landing",
    client: "Own Project",
    type: "Static website, front-end focused. Animations and gradient focused.",
    url: "https://brainwave-kh6j.vercel.app/",
  },
  {
    year: "2025",
    project: "thefinalprojects",
    client: "thefinalprojects",
    type: "Dynamic website, Full-stack development, Admin panel, Supabase integration",
    url: "https://www.thefinalprojects.com/dashboard",
  },
];

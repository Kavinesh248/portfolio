export function CustomReply({ reply }) {
  const match = reply.match(/<custom type="(.*?)">(.*?)<\/custom>/s);

  if (match) {
    const [, type, content] = match;

    if (type === "projects") {
      const projects = content
        .trim()
        .split("\n\n")
        .map((block) => {
          const lines = block.split("\n");
          return {
            title: lines[0] || "",
            desc: lines[1] || "",
            client: lines[2] || "",
            timeline: lines[3] || "",
            link: lines[4]?.includes("http") ? lines[4] : "#",
          };
        });

      return (
        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-4 space-y-1 text-white"
            >
              <h3 className="text-base font-semibold">{proj.title}</h3>
              <p className="text-sm text-zinc-300">{proj.desc}</p>
              <p className="text-sm text-zinc-400">{proj.client}</p>
              <p className="text-sm text-zinc-500">{proj.timeline}</p>
              <a
                href={proj.link}
                className="inline-block text-sm text-blue-400 hover:underline mt-1"
                target="_blank"
              >
                View website →
              </a>
            </div>
          ))}
        </div>
      );
    }
  }

  // Fallback
  return <p className="whitespace-pre-wrap">{reply}</p>;
}

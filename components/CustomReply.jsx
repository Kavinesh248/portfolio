import CustomReplyBox from "./CustomReplyBox";

export function CustomReply({ reply }) {
  const match = reply.match(/<custom type="(.*?)">(.*?)<\/custom>/s);

  if (!match) {
    return <p className="whitespace-pre-wrap">{reply}</p>;
  }

  const [, type, content] = match;

  const customRenderers = {
    projects: (data) => {
      const projects = data
        .trim()
        .split("\n")
        .filter(
          (line) => line.trim().startsWith("•") || line.trim().match(/^\d+\./)
        )
        .map((line) => {
          const cleaned = line.replace(/^[•\d.\s]+/, "").trim();
          const [title, desc, client, year, url] = cleaned
            .split("–")
            .map((s) => s.trim());
          return {
            title: title || "",
            desc: desc || "",
            client: client || "",
            year: year || "",
            url: url || "",
          };
        });

      return (
        <div className="space-y-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 chat-response hover:bg-zinc-50 space-y-1 text-black-primary border border-zinc-200"
            >
              <h3 className="text-base">
                {proj.title} ({proj.year})
              </h3>
              {proj.desc && <p className="">{proj.desc}</p>}
              {proj.client && <p className="">Client: {proj.client}</p>}
              {proj.url && (
                <a
                  href={proj.url}
                  className="text-blue-600 text-[1rem] pb-[0.1rem] border-b border-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      );
    },

    skills: (data) => {
      const lines = data.trim().split("\n").filter(Boolean);

      return (
        <div className="space-y-2 text-white">
          {lines.map((line, idx) => {
            const [category, skills] = line.split(":");
            if (!category || !skills) return null;

            return (
              <div key={idx} className="chat-response">
                <h3 className="">
                  {category.trim()}: {skills.trim()}
                </h3>
              </div>
            );
          })}
        </div>
      );
    },

    resume: (data) => {
      const filename = data.trim();
      return (
        <div className="bg-white rounded-full px-6 py-2 w-full border border-black-primary/40 flex items-center justify-between">
          <span className="text-gray-800 font-medium text-sm">{filename}</span>
          <a
            href={`/${filename}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-primary hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            View
          </a>
        </div>
      );
    },

    contact: (data) => {
      const email = data.trim();
      return (
        <CustomReplyBox
          reply={email}
          svg={`<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>`}
        />
      );
    },
  };

  const renderer = customRenderers[type];

  return renderer ? (
    renderer(content)
  ) : (
    <p className="whitespace-pre-wrap">{reply}</p>
  );
}

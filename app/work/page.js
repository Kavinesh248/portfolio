import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { projects, technologies } from "@/constants";

const Page = function () {
  return (
    <section
      className="min-h-screen z-999 bg-background-primary relative"
      id="smooth-wrapper"
    >
      <Header />

      <div
        className="max-w-7xl mx-auto z-1 h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide"
        id="smooth-content"
      >
        <div className="flex flex-col gap-4 common-padding">
          <h1 className="text-black-primary leading-[1.3] text-xl md:text-3xl">
            Frontend developer from India crafting fast, pixel-perfect web
            products with AI-powered workflows — remotely helping brands turn
            ideas into reality.
          </h1>

          <div className="flex gap-4 md:gap-6 mt-4 md:my-6">
            <a
              href="/contact"
              className="cta-btn bg-black-primary md:text-xl text-background-primary hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-2 px-6 py-2 overflow-hidden"
            >
              Contact →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-black cta-btn md:text-xl hover:bg-gray-100 transition"
            >
              View Resume 📝
            </a>
          </div>
        </div>

        <section className="border-t border-b-light">
          <div className="common-padding">
            <h2 className="text-2xl mb-5 md:mb-6">Technologies</h2>
            <ul className="space-y-3 text-xl md:text-xl leading-relaxed">
              {technologies.map(({ category, items }) => (
                <li key={category}>
                  <span className="font-medium">{category}:</span>{" "}
                  {items.map((item, index) =>
                    index === items.length - 1 ? item : `${item}, `
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="common-padding border-t border-b-light">
          <h2 className="text-xl font-semibold">Projects ↓</h2>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-fixed text-left md:text-base border-separate border-spacing-y-4">
              <thead>
                <tr className="text-neutral-500 hidden md:table-row">
                  <th className="w-1/12 font-normal">Year</th>
                  <th className="w-4/12 font-normal">Project</th>
                  <th className="w-3/12 font-normal">Client</th>
                  <th className="w-3/12 font-normal">Type</th>
                  <th className="w-1/12 text-right font-normal">View</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {projects.map(({ year, project, client, type, url }, index) => (
                  <tr
                    key={index}
                    className="flex flex-col md:table-row transition-colors py-4 space-y-1 text-xl md:text-base border-b border-b-light hover:bg-gray-50"
                  >
                    <td>{year}</td>
                    <td>{project}</td>
                    <td>{client}</td>
                    <td className="break-words whitespace-normal max-w-xs">
                      {type}
                    </td>
                    <td className="text-left md:text-right">
                      <a
                        href={url}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        View <span>→</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
};

export default Page;

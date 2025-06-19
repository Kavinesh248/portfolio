import Header from "@/components/Header";

const page = function () {
  return (
    <article>
      <Header />

      <div>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium mb-4">
              Contact Information{" "}
              <span className="inline-block rotate-180">↓</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Email</p>
                <a
                  href="mailto:alex.streza@snowfox.art"
                  className="text-black hover:underline"
                >
                  alex.streza@snowfox.art
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">X (Twitter)</p>
                <a
                  href="https://twitter.com/alex_streza"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alex_streza
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/alex-streza"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alex-streza
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">GitHub</p>
                <a
                  href="https://github.com/alex-streza"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alex-streza
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default page;

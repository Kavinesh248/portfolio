import Footer from "@/components/Footer";
import Header from "@/components/Header";

const page = function () {
  return (
    <article className="h-screen">
      <Header />

      <div className="h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide flex flex-col justify-center">
        <div className="max-w-7xl md:mx-auto flex-1 common-padding">
          <div>
            <h3 className="md:text-2xl text-xl font-medium mb-5 md:mb-6">
              Contact Information{" "}
              <span className="inline-block rotate-180">↑</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-md md:text-lg">
              <div>
                <p className="font-medium mb-1">Email</p>
                <a
                  href="mailto:kavinesh.contact@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  kavinesh.contact@gmail.com
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">X (Twitter)</p>
                <a
                  href="https://x.com/kavinesh9090"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kavinesh-X
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/kavineshm/"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kavinesh-LinkedIn
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">GitHub</p>
                <a
                  href="https://github.com/Kavinesh248"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kavinesh-Github
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/kavineshx.web/"
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kavinesh-Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </article>
  );
};

export default page;

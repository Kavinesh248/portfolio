import SkillBalls from "./Skillballs";

const MainContent = function () {
  return (
    <section className="text-background-primary md:grid w-full h-full md:grid-cols-2 z-99 py-10 px-6">
      <div className="w-full border-r-1 border-b-light">
        <div>
          <h2 className="heading-primary mb-4 leading-[1.4] text-background-primary">
            Kavinesh - Frontend Developer and UI/UX Designer
          </h2>

          <p className="description-primary text-background-primary/80 leading-[1.3]">
            I craft clean, responsive interfaces with a focus on performance and
            usability. Blending frontend development and UI/UX, I deliver smooth
            digital experiences.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button className="cta-btn bg-black-primary text-nowrap border-b-light border flex items-center gap-1">
              Connect with me
            </button>
            <button className="cta-btn bg-background-primary text-black-primary">
              Chat with AI
            </button>
          </div>
        </div>

        {/* <div className="w-full h-[500px]">
          <SkillBalls />
        </div> */}
      </div>

      <div></div>
    </section>
  );
};

export default MainContent;

{
  /* <span>Connect with me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */
}

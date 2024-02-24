import ClientList from "./ClientList";
import Projects from "./Projects";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-bg lg:h-screen">
        <div className="max-w-[1200px] m-auto">
          <div className="lg:flex lg:h-screen lg:items-center">
            <div className="w-full px-4 lg:grid lg:grid-cols-2">
              <div className="text-white">
                <h1 className="text-5xl font-heavy uppercase flex items-center gap-3 lg:text-6xl">
                  <svg
                    className="text-xl text-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M3 21V3h18v18z" />
                  </svg>
                  About us
                </h1>

                <div className="mt-7 flex flex-col gap-2 pl-7 text-xs sm:w-[460px] lg:mt-1">
                  <p>
                    <span className="font-black">Project Manager</span> and{" "}
                    <span className="font-black">Quantity Surveyor</span> with
                    Design, Site Management, and Procurement Experiences.
                  </p>
                  <p>
                    Those experiences help our team identify cost-saving
                    measurements without breaking the design intent and help
                    complete what’s lacking in the plan under 2D drawing.
                  </p>
                  <p>
                    Our partnership started in 2023, when spectacon and
                    percivalestimate provided management service for a city
                    arena.
                  </p>
                  <p>
                    We add Geopolitics Analysis to our service to be our own
                    brand of construction cost management.
                  </p>
                  <p>
                    Politics is an elephant in the room. From the economic
                    policies and interest rate to labor escalation, all are
                    affected by politics.
                  </p>
                  <p>
                    Our capability to analyze geopolitics situations help us
                    prepare your project from heavy setbacks (e.g.
                    Ukraine-Russian War) and conduct multiple cost plans at no
                    extra cost.
                  </p>
                </div>
                <div className="hidden lg:block lg:py-3 lg:pl-7">
                  <h1 className="hidden lg:flex lg:font-bold lg:uppercase lg:text-xl lg:tracking-tighter">
                    Contact Us
                  </h1>
                  <div>
                    <div className="max-w-20 flex gap-1 lg:w-20">
                      <ClientList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 lg:p-0">
                <div className="flex justify-end lg:justify-start">
                  <h1 className="text-white font-heavy uppercase text-2xl text-right leading-6 flex flex-col lg:text-5xl lg:text-left">
                    COLLABORATION{" "}
                    <span className="text-orange">WITH OVERSIGHT</span>{" "}
                    MANAGEMENT
                  </h1>
                </div>
                <div className="grid grid-cols-4 gap-1 w-full relative py-7 lg:grid-cols-1 lg:py-2">
                  <div className="lg:hidden">
                    <ClientList />
                  </div>
                  <div className="grid grid-cols-2 gap-1 w-full">
                    <Projects />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

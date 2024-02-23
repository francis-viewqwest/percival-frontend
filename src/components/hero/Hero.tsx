import acciona from "../../assets/images/client-logo/1.jpg";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full py-20 px-4">
        <div className="text-white">
          <h1 className="text-4xl font-black uppercase flex items-center gap-4">
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

          <div className="mt-7 flex flex-col gap-4 pl-10">
            <p>
              <span className="font-black">Project Manager</span> and{" "}
              <span className="font-black">Quantity Surveyor</span> with Design,
              Site Management, and Procurement Experiences.
            </p>
            <p>
              Those experiences help our team identify cost-saving measurements
              without breaking the design intent and help complete what’s
              lacking in the plan under 2D drawing.
            </p>
            <p>
              Our partnership started in 2023, when spectacon and
              percivalestimate provided management service for a city arena.
            </p>
            <p>
              We add Geopolitics Analysis to our service to be our own brand of
              construction cost management.
            </p>
            <p>
              Politics is an elephant in the room. From the economic policies
              and interest rate to labor escalation, all are affected by
              politics.
            </p>
            <p>
              Our capability to analyze geopolitics situations help us prepare
              your project from heavy setbacks (e.g. Ukraine-Russian War) and
              conduct multiple cost plans at no extra cost.
            </p>
            <div className="w-10 flex gap-3">
              <img src={acciona} alt="" />
              <img src={acciona} alt="" />
              <img src={acciona} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Hero;

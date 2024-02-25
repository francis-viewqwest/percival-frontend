import ServiceList from "./ServiceList";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-bg lg:h-screen">
        <div className="lg:flex lg:h-screen lg:items-center">
          <div className="px-4 max-w-[1200px] m-auto lg:p-0">
            <div className="grid grid-cols-3">
              <div>
                <h1 className="flex flex-col font-heavy uppercase text-4xl text-white lg:text-4xl">
                  Our <span>Service</span>
                </h1>
              </div>
              <div className="text-end flex flex-col gap-1 justify-end relative">
                <svg
                  className="hidden lg:block lg:text-orange lg:w-6 lg:right-0 lg:top-[-20px] lg:absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"
                  />
                </svg>
                <h1 className="font-extrabold uppercase text-white text-xs lg:text-lg">
                  Proactive
                </h1>
                <h1 className="font-extrabold uppercase text-white text-xs lg:text-lg">
                  Competitive
                </h1>
                <h1 className="font-extrabold uppercase text-white text-xs lg:text-lg">
                  With Sense of Urgency
                </h1>
              </div>
              <div>
                <div className="hidden lg:block">
                  <div className="p-[0.1px] bg-white top-0"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-7 lg:py-7">
              <div className="flex flex-row gap-2 lg:gap-9 lg:bottom-0">
                <h1 className="flex flex-col text-xs text-white font-extrabold uppercase lg:text-xl lg:leading-6">
                  Construction <span>Management</span>
                </h1>
                <h1 className="flex flex-col text-xs text-white font-extrabold uppercase lg:text-xl lg:leading-6">
                  Quantity <span>Surveying</span>
                </h1>
                <h1 className="flex flex-col text-xs text-white font-extrabold uppercase lg:text-xl lg:leading-6">
                  Feasibility <span>Study</span>
                </h1>
              </div>
              <div className="text-end lg:right-0 lg:float-right">
                <h1 className="text-white font-bold uppercase flex flex-col text-xs lg:text-lg lg:leading-5">
                  Our Personnel <span>Experience</span>
                </h1>
                <h1 className="font-bold uppercase text-xs text-orange lg:text-3xl">
                  Land Development
                </h1>
              </div>
            </div>
            <div>
              <div className="bg-white p-[1px]"></div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <div className="hidden">
                <h1 className="text-white uppercase font-heavy flex flex-col leading-6 text-xl">
                  We <span>Are Sustainable</span>
                  <span className="text-orange">Advocator</span>
                </h1>
              </div>
              <div className="py-7">
                <ServiceList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

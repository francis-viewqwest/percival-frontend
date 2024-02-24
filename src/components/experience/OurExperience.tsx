import React from "react";
import ExperienceList from "./ExperienceList";
import PublishList from "./PublishList";

const OurExperience: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-bg">
        <div className="lg:flex lg:h-screen lg:items-center">
          <div className="p-4 max-w-[1200px] m-auto lg:p-0">
            <div className="lg:grid lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:border-r-2 lg:pr-4">
                <div className="relative">
                  <svg
                    className="text-orange absolute right-8 top-1 w-3 lg:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"
                    />
                  </svg>
                  <h1 className="text-white text-2xl font-heavy uppercase flex flex-col leading-5 lg:text-4xl">
                    Our <span>Experience</span>
                  </h1>
                  <h1 className="hidden lg:block text-orange font-extrabold uppercase">
                    Contact US
                  </h1>
                  <p className="hidden lg:block text-xs text-white">
                    Our People have experience in the following projects
                  </p>
                  <div className="my-3">
                    <div className="p-[1px] bg-white w-32 lg:w-96"></div>
                  </div>
                  <div className="lg:hidden">
                    <ExperienceList />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <h1 className="text-white text-2xl font-heavy uppercase flex flex-col leading-5 lg:text-4xl">
                      Contact <span>Info</span>
                    </h1>
                    <div className="text-white py-4 flex flex-col gap-1">
                      <p className="text-xs text-orange">
                        <span className="font-extrabold text-xs text-white">
                          INQUIRY/QUOTATION:
                        </span>{" "}
                        business@percivalestimate.com
                      </p>
                      <p className="text-xs text-orange">
                        <span className="font-extrabold text-xs text-white">
                          CORRUPTION REPORT:
                        </span>{" "}
                        info@percivalestimate.com
                      </p>
                      <p className="text-xs text-orange">
                        <span className="font-extrabold text-xs text-white">
                          VIBER:
                        </span>{" "}
                        spectacon-percival
                      </p>
                      <p className="text-xs text-orange">
                        <span className="font-extrabold text-xs text-white">
                          MOBILE:
                        </span>{" "}
                        +63-976-427-4653
                      </p>
                    </div>
                    <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:w-2/3">
                      <p className="text-white text-xs">
                        We may be a new but through our team's collective
                        history and extensive personal experiences, we have
                        developed expertise in projects of this nature and in a
                        competitive rate.
                      </p>
                      <p className="text-white text-xs">
                        very Firms starts with nothing but experiences and
                        expertise of its founding members.
                      </p>
                      <p className="text-white text-xs">
                        We aim to shape the future of construction by setting
                        new standards in cost management and project delivery
                        with success and quality.
                      </p>
                    </div>
                  </div>
                  <div className="lg:hidden">
                    <h1 className="text-orange font-extrabold text-2xl">
                      PUBLISHED WORKS
                    </h1>
                    <div className="mt-3">
                      <div className="flex flex-col gap-4">
                        <PublishList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pl-4">
                  <ExperienceList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperience;

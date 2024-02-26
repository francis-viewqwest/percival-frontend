import React from "react";
import image1 from "../../assets/images/publish-work/image-1.png";
import { Icon } from "@iconify/react";

const YearEndModal: React.FC = ({ handleClickClose }) => {
  return (
    <>
      <div className="w-full h-screen bg-bg absolute text-white/70">
        <div className="max-w-[1200px] m-auto">
          <div className="flex h-screen items-center">
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-2 row-span-5 border-r-2 m-auto">
                <img className="h-96 mr-10" src={image1} alt="" />
              </div>
              <div className="col-span-3 row-span-5 col-start-3 px-7 flex flex-col gap-10 m-auto p-10 bg-bgfade relative">
                <div className="right-0 top-0 m-6 flex absolute">
                  <Icon
                    onClick={() => handleClickClose()}
                    className=" text-orange"
                    fontSize={32}
                    icon="heroicons:x-mark-20-solid"
                  />
                </div>
                <div className="flex flex-col gap-10 text-center m-6">
                  <p className="text-2xl font-extrabold">
                    The spectacon-percival’s 2023 Year-End Retrospective delves
                    into key factors shaping the Philippine construction
                    industry. From Geopolitics and Economy up to Supply and
                    Demand.
                  </p>
                  <p className="text-2xl font-extrabold">
                    The nation's dependence on imported goods, notably oil,
                    makes it susceptible to external influences.
                  </p>
                  <p className="text-2xl font-extrabold">
                    We recognized the absence of Fixed Trend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearEndModal;

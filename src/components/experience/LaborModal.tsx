import React from "react";
import image2 from "../../assets/images/publish-work/image-2.png";
import { Icon } from "@iconify/react";

interface LaborModalProps {
  handleClickClose: () => void;
}

const LaborModal: React.FC<LaborModalProps> = ({ handleClickClose }) => {
  return (
    <>
      <div className="w-full h-full lg:h-screen bg-bg text-white/70">
        <div className="max-w-[1200px] m-auto">
          <div className="lg:flex lg:h-screen lg:items-center">
            <div className="p-4 gap-3 flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-4">
              <div className="lg:col-span-2 lg:row-span-5 lg:border-r-2 m-auto">
                <img className="lg:h-96 lg:mr-10" src={image2} alt="" />
              </div>
              <div className="lg:col-span-3 lg:row-span-5 lg:col-start-3 lg:px-7 lg:flex lg:flex-col lg:gap-10 m-auto p-10 bg-bgfade relative">
                <div className="right-0 top-0 m-6 flex absolute">
                  <Icon
                    onClick={() => handleClickClose()}
                    className=" text-orange cursor-pointer"
                    fontSize={32}
                    icon="heroicons:x-mark-20-solid"
                  />
                </div>
                <div className="flex flex-col gap-10 text-center m-6">
                  <p className="text-xl lg:text-2xl font-extrabold">
                    Labor Cost Escalation is influenced by geopolitical
                    developments and it differs per region and a key
                    construction parameter under our analysis.
                  </p>
                  <p className="text-xl lg:text-2xl font-extrabold">
                    This is spectacon-percival estimate to help your project be
                    prepared for potential future cost of your development.
                  </p>
                  <p className="text-xl lg:text-2xl font-extrabold">
                    Every Project is different.
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

export default LaborModal;

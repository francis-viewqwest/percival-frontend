import React from "react";
import image2 from "../../assets/images/publish-work/image-2.png";

const LaborModal: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-bg absolute text-white/70">
        <div className="max-w-[1200px] m-auto">
          <div className="flex h-screen items-center">
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-2 row-span-5 border-r-2">
                <img className="h-96 mr-10" src={image2} alt="" />
              </div>
              <div className="col-span-3 row-span-5 col-start-3 px-7 flex flex-col gap-10 m-auto">
                <div className="flex flex-col gap-10 text-center">
                  <p className="text-2xl font-extrabold">
                    Labor Cost Escalation is influenced by geopolitical
                    developments and it differs per region and a key
                    construction parameter under our analysis.
                  </p>
                  <p className="text-2xl font-extrabold">
                    This is spectacon-percival estimate to help your project be
                    prepared for potential future cost of your development.
                  </p>
                  <p className="text-2xl font-extrabold">
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

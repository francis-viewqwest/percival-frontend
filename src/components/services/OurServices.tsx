import ServiceList from "./ServiceList";
import Details from "./Details";
import decentWork from "../../assets/images/services/decentwork.png";
import sustaicities from "../../assets/images/services/sustaicities.png";
import peace from "../../assets/images/services/peace.png";
import { useState } from "react";

const OurServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    title: string;
    index: number;
  }>();

  const category = [
    {
      title: "Construction <span>Management</span>",
      subHead: "PROACTIVE",
      categoryContent: [
        {
          category: "Construction Management",
          details:
            "We anticipate possible risks to help you either mitigate, transfer or totally eliminate risk.",
          descCol1: [
            {
              header: "Pre-Construction stage",
              child: [
                { list: "Defining Project Goal" },
                {
                  list: "Collaboration with designers and other Project Management Team",
                },
                {
                  list: "Review Drawing Completeness",
                },
                {
                  list: "Preparation of Schedule and Methodology",
                },
                {
                  list: "Risk Assessment",
                },
                {
                  list: "Prepare Contract Packages",
                },
                {
                  list: "Assist in Procurement",
                },
                {
                  list: "Prepare Reporting System, Quality System, Meeting Schedule, Chain of Command",
                },
                {
                  list: "Prepare Reporting System, Quality System, Meeting Schedule, Chain of Command",
                },
              ],
            },
          ],
          descCol2: [
            {
              header: "Construction AND POST-CONSTRUCTION stage",
              child: [
                { list: "Work and Schedule Monitoring" },
                {
                  list: "Enforcing Strict Health and Safety Protocol",
                },
                {
                  list: "Collaboration with Client and Vendors",
                },
                {
                  list: "Oversee Contractor’s Quality Control Program and Inspection of Quality Control",
                },
                {
                  list: "Change Order and Budget Management",
                },
                {
                  list: "Facilitation of Testing and Commissioning",
                },
                {
                  list: "Handover and Closeout",
                },
                {
                  list: "Warranty Administration",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Quantity <span>Surveying</span>",
      subHead: "COMPETITIVE",
      categoryContent: [
        {
          category: "Quantitity Surveying",
          details:
            "It creates better output in efficient manner. Our Fee is competitive as well.",
          descCol1: [
            {
              header: "Pre-Construction stage",
              child: [
                { list: "Multiple Cost Plan Preparation" },
                {
                  list: "Materail Take-Off",
                },
                {
                  list: "Design Economics/Value Engineering",
                },
                {
                  list: "Assist in Risk Mitigation",
                },
                {
                  list: "Tendering and Procurement",
                },
                {
                  list: "Contract Packages Preparation",
                },
                {
                  list: "Terms Negotiation",
                },
              ],
            },
          ],
          descCol2: [
            {
              header: "Construction AND POST-CONSTRUCTION stage",
              child: [
                { list: "Contract Administration" },
                {
                  list: "Cost Control",
                },
                {
                  list: "Change Order and Billing Evaluation",
                },
                {
                  list: "Claim Evaluation",
                },
                {
                  list: "Project Closeout",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Feasibility <span>Study</span>",
      subHead: "WITH SENSE OF URGENCY",
      categoryContent: [
        {
          category: "Feasibility Study",
          details:
            "Emergency doesn’t wait. Our WFH professional can cater your emergency needs through Teams, Viber, or Facebook 24/7 without hassles.",
          descCol1: [
            {
              header: "PHASE 1 MARKET ANALYSIS",
              child: [
                { list: "Research and Survey" },
                {
                  list: "Supply and Demand Analysis",
                },
                {
                  list: "Pricing Trend",
                },
                {
                  list: "Seasonality Impact Preparation",
                },
                {
                  list: "Competition Analysis and SWOT",
                },
                {
                  list: "Developing Competitive Differentiation Strategy (USP)",
                },
                {
                  list: "Defining buyer/renter based from Research Survey and Analysis",
                },
              ],
            },
          ],
          descCol2: [
            {
              header: "Construction AND POST-CONSTRUCTION stage",
              child: [
                {
                  list: "Assist in development of conceptual drawings based from Market Analysis",
                },
                {
                  list: "Defining Unit Mix",
                },
                {
                  list: "Unit Layout and Amenities Optomization",
                },
                {
                  list: "Assist in Operational Model Development",
                },
                {
                  list: "Operation Cost Estimation",
                },
                {
                  list: "Break-Even Analysis and Sensitivity Analysis",
                },
                {
                  list: "Cost Planning with Value Engineering",
                },
                {
                  list: "Reporting to Stakeholder",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const handleClickCategory = (title: string, index: number) => {
    setSelectedCategory({ title, index });
    console.log(index);
  };

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
                {category.map((item, index) => (
                  <h1
                    className={`font-extrabold uppercase text-xs lg:text-lg ${
                      selectedCategory?.index === index
                        ? "text-orange"
                        : "text-white"
                    }`}
                    key={index}
                  >
                    {item.subHead}
                  </h1>
                ))}
              </div>
              <div>
                <div className="hidden lg:block">
                  <div className="p-[0.1px] bg-white top-0"></div>
                </div>
                <div className="hidden lg:block lg:ml-4 lg:text-right">
                  {selectedCategory?.index !== undefined ? (
                    <>
                      {category[selectedCategory.index]?.categoryContent.map(
                        (item, index) => (
                          <Details
                            key={index}
                            selectedCategory={selectedCategory}
                            item={item}
                            index={index}
                          />
                        )
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-7 lg:py-7">
              <div className="flex flex-row gap-2 lg:gap-9 lg:bottom-0">
                {category.map((item, index) => (
                  <h1
                    onClick={() => handleClickCategory(item.title, index)}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className={`flex flex-col text-xs font-extrabold uppercase cursor-pointer lg:text-xl lg:leading-6 ${
                      selectedCategory?.index === index
                        ? "text-orange"
                        : "text-white"
                    }`}
                  />
                ))}
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
              <div className="">
                <h1 className="text-white uppercase font-heavy flex flex-col leading-6 text-xl lg:text-5xl">
                  We <span>Are Sustainable</span>
                  <span className="text-orange">Advocator</span>
                </h1>
              </div>
              <div className="py-7 flex gap-3">
                {selectedCategory?.index !== undefined ? (
                  <>
                    {category[selectedCategory.index]?.categoryContent.map(
                      (item, index) => (
                        <ServiceList
                          key={index}
                          selectedCategory={selectedCategory}
                          item={item}
                          index={index}
                        />
                      )
                    )}
                  </>
                ) : (
                  <div className=" gap-3 grid grid-cols-2">
                    <div className="flex gap-3">
                      <img className="max-w-24" src={decentWork} alt="" />
                      <img className="max-w-24" src={sustaicities} alt="" />
                      <img className="max-w-24" src={peace} alt="" />
                    </div>
                    <div></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

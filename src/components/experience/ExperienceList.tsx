import React from "react";
import PublishList from "./PublishList";

const ExperienceList: React.FC = () => {
  const expList = [
    {
      title: "Makati Commerce Tower",
      desc: "Construction Management",
      category: "High-Rise-Leed",
      scope: null,
    },
    {
      title: "MANDALUYONG ARENA",
      desc: "Construction Management",
      category: "Quantity Surveying",
      scope: "Arena",
    },
    {
      title: "FRADERA WATERPARK",
      desc: "Quantity Surveying",
      category: "Engineering Design",
      scope: "Waterpark",
    },
    {
      title: "QUAD 1 AEROPARK",
      desc: "Construction Management",
      category: "Mid-Rise",
      scope: null,
    },
    {
      title: "ONE-STOP SHOP",
      desc: "Quantity Surveying",
      category: "Engineering Design",
      scope: "Land Development",
    },
    {
      title: "LEMLUNAY HOTEL",
      desc: "Quantity Surveying",
      category: "Hotel",
      scope: null,
    },
    {
      title: "TNAKA HOTEL AND CONVENTION",
      desc: "Quantity Surveying",
      category: "Hotel",
      scope: null,
    },
    {
      title: "MINDANAO CONTAINER PORT",
      desc: "Construction Management",
      category: "Port",
      scope: null,
    },
    {
      title: "LUCENA COMMERCIAL BUILDING",
      desc: "Quantity Surveying",
      category: "Commercial",
      scope: null,
    },
    {
      title: "SCT EXPRESSWAY",
      desc: "Construction Management",
      category: "Expressway",
      scope: null,
    },
    {
      title: "WEST AEROPARK",
      desc: "Project Management",
      category: "Site Development",
      scope: null,
    },
    {
      title: "BOHOL MIXED-USE DEVELOPMENT",
      desc: "Quantity Surveying MEPFS",
      category: "Mixed-use",
      scope: null,
    },
    {
      title: "SUNVALLEY GOLF COURSE",
      desc: "Construction Management",
      category: "Land Development",
      scope: null,
    },
    {
      title: "MILITARY FACILITY",
      desc: "Quantity Surveying",
      category: "Military Facility",
      scope: null,
    },
    {
      title: "MILTARY AIRBASE",
      desc: "Quantity Surveying",
      category: "Military Development",
      scope: null,
    },
    {
      title: "STA. ROSA WAREHOUSE",
      desc: "Construction Management",
      category: "Warehouse",
      scope: null,
    },
    {
      title: "ANGONO WAREHOUSE",
      desc: "Quantity Surveying",
      category: "Warehouse",
      scope: null,
    },
    {
      title: "carmelray warehouse",
      desc: "Quantity Surveying",
      category: "Warehouse",
      scope: null,
    },
    {
      title: "15-storey altitude hotel",
      desc: "Construction Management",
      category: "Mid-Rise",
      scope: null,
    },
    {
      title: "7-storey prime asia ext.",
      desc: "Construction Management",
      category: "Low-Rise",
      scope: null,
    },
    {
      title: "BAGUIO MEDICAL CENTER",
      desc: "Quantity Surveying MEPFS",
      category: "Hospital",
      scope: null,
    },
    {
      title: "NONOS",
      desc: "Quantity Surveying",
      category: "Commercial",
      scope: null,
    },
    {
      title: "4-STOREY MAKATI BUILDING",
      desc: "Quantity Surveying MEPFS",
      category: "Low-Rise",
      scope: null,
    },
    {
      title: "GALLIUS",
      desc: "Quantity Surveying MEPFS",
      category: "Office",
      scope: null,
    },
    {
      title: "AMADEO RESTHOUSE AND RESORT",
      desc: "Quantity Surveying",
      category: "Resort",
      scope: null,
    },
    {
      title: "3-STOREY LAGUNA RESORT",
      desc: "Quantity Surveying",
      category: "Resort",
      scope: null,
    },
    {
      title: "KUYA KOREA FITOUT",
      desc: "Quantity Surveying",
      category: "Commercial",
      scope: null,
    },
    {
      title: "THE EDEN FITOUT",
      desc: "Quantity Surveying",
      category: "Commercial",
      scope: null,
    },
    {
      title: "NUVALI RESIDENCE",
      desc: "Quantity Surveying",
      category: "Private",
      scope: null,
    },
    {
      title: "T-SHOP AT THE PODIUM",
      desc: "Quantity Surveying",
      category: "Commercial",
      scope: null,
    },
    {
      title: "WESTGROVE RESIDENCE",
      desc: "Quantity Surveying",
      category: "Private",
      scope: null,
    },
  ];

  const firstCol = expList.slice(0, 18);
  const secondCol = expList.slice(18);

  return (
    <>
      <div className="hidden">
        {expList.map((item, index) => (
          <h1
            key={index}
            className="text-white uppercase pt-1 font-extrabold text-xs py-1"
          >
            {item.title}
          </h1>
        ))}
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div>
          {firstCol.map((item, index) => (
            <h1
              key={index}
              className="text-white uppercase pt-1 font-extrabold text-xs py-1"
            >
              {item.title}
            </h1>
          ))}
        </div>
        <div>
          {secondCol.map((item, index) => (
            <h1
              key={index}
              className="text-white uppercase pt-1 font-extrabold text-xs py-1"
            >
              {item.title}
            </h1>
          ))}
          <div className="flex flex-col gap-2">
            <h1 className="font-heavy text-2xl text-orange uppercase">
              Published Works
            </h1>
            <div className="flex gap-3 max-w-20">
              <PublishList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceList;

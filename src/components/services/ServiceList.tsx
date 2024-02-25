import React from "react";

const ServiceList: React.FC = () => {
  const services = [
    {
      category: "Construction Management",
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
    {
      category: "Quantitity Surveying",
    },
    {
      category: "Feasibility Study",
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <div className="grid grid-cols-2" key={index}>
          {service.descCol1 &&
            service.descCol1.map((descCol1, i) => (
              <div key={i}>
                <h2 className="text-orange font-heavy text-sm uppercase leading-3">
                  {descCol1.header}
                </h2>
                <ul>
                  {descCol1.child.map((item, i) => (
                    <li className="text-white text-xs" key={i}>
                      {item.list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {service.descCol2 &&
            service.descCol2.map((descCol2, i) => (
              <div key={i}>
                <h2 className="text-orange font-heavy text-sm uppercase leading-3">
                  {descCol2.header}
                </h2>
                <ul>
                  {" "}
                  {descCol2.child.map((item, i) => (
                    <li className="text-white text-xs" key={i}>
                      {item.list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default ServiceList;

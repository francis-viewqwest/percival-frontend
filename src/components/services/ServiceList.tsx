import React from "react";

const ServiceList: React.FC<{
  selectedCategory: { title: string; index: number };
  item: {
    categoryContent?: Array<{ header: string; child: Array<{ list: string }> }>;
    descCol1?: Array<{ header: string; child: Array<{ list: string }> }>;
    descCol2?: Array<{ header: string; child: Array<{ list: string }> }>;
  };
  index: number;
}> = ({ item, index }) => {
  return (
    <>
      <div className="grid grid-cols-2" key={index}>
        {item.descCol1 &&
          item.descCol1.map((descCol1, i) => (
            <div key={i}>
              <h2 className="text-orange font-heavy text-sm uppercase leading-3">
                {descCol1.header}
              </h2>
              <ul>
                {descCol1.child.map((innerItem, i) => (
                  <li className="text-white text-xs" key={i}>
                    {innerItem.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {item.descCol2 &&
          item.descCol2.map((descCol2, i) => (
            <div key={i}>
              <h2 className="text-orange font-heavy text-sm uppercase leading-3">
                {descCol2.header}
              </h2>
              <ul>
                {" "}
                {descCol2.child.map((innerItem, i) => (
                  <li className="text-white text-xs" key={i}>
                    {innerItem.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceList;

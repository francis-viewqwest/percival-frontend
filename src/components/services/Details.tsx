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
      <h1 className="hidden lg:block lg:text-white lg:font-bold lg:text-sm">
        {item.details}
      </h1>
    </>
  );
};

export default ServiceList;

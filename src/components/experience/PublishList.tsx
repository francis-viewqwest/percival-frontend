import React from "react";
import image1 from "../../assets/images/publish-work/image-1.png";
import image2 from "../../assets/images/publish-work/image-2.png";

const publishWork = [
  {
    img: image1,
    desc: "<p>The spectacon-percival’s 2023 Year-End Retrospective delves into key factors shaping the Philippine construction industry. From Geopolitics and Economy up to Supply and Demand.</p> <p>The nation's dependence on imported goods, notably oil, makes it susceptible to external influences.</p> <p>We recognized the absence of Fixed Trend.</p>",
  },
  {
    img: image2,
    desc: "<p>Labor Cost Escalation is influenced by geopolitical developments and it differs per region and a key construction parameter under our analysis.</p> <p>This is spectacon-percival estimate to help your project be prepared for potential future cost of your development.</p><p>Every Project is different.</p>",
  },
];

const PublishList: React.FC = () => {
  return (
    <>
      {publishWork.map((item, index) => (
        <img key={index} src={item.img} alt="Publish Work Image" />
      ))}
    </>
  );
};

export default PublishList;

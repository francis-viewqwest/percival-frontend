import React from "react";
import project1 from "../../assets/images/projects/land development.png";
import project2 from "../../assets/images/reprojects/BCC C.jpg";
import project3 from "../../assets/images/reprojects/waterpark.png";
import project4 from "../../assets/images/reprojects/ARENA VIEW 4.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      logo: project1,
    },
    {
      logo: project2,
    },
    {
      logo: project3,
    },
    {
      logo: project4,
    },
  ];

  return (
    <>
      {projects.map((item, index) => (
        <img
          className={`w-full h-full ${index === 2 && "w-10"}`}
          key={index}
          src={item.logo}
          alt="Client Logo"
        />
      ))}
    </>
  );
};

export default Projects;

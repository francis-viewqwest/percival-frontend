import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-bg">
        <div className="max-w-[1200px] m-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;

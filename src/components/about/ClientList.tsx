import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import acciona from "../../assets/images/client-logo/1.png";
import kyriarch from "../../assets/images/client-logo/2.jpg";
import bcArch from "../../assets/images/client-logo/3.jpg";
import olos from "../../assets/images/client-logo/4.jpg";
import usn from "../../assets/images/client-logo/5.jpg";
import oneArellano from "../../assets/images/client-logo/6.png";
import rsBuilders from "../../assets/images/client-logo/7.png";
import amberBuilders from "../../assets/images/client-logo/8.png";
import letterR from "../../assets/images/client-logo/9.jpg";
import robArch from "../../assets/images/client-logo/10.jpg";
import DCM from "../../assets/images/client-logo/11.jpg";

const ClientList: React.FC = () => {
  const client = [
    {
      logo: acciona,
    },
    {
      logo: kyriarch,
    },
    {
      logo: bcArch,
    },
    {
      logo: olos,
    },
    {
      logo: usn,
    },
    {
      logo: oneArellano,
    },
    {
      logo: rsBuilders,
    },
    {
      logo: amberBuilders,
    },
    {
      logo: letterR,
    },
    {
      logo: robArch,
    },
    {
      logo: DCM,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % client.length);
    }, 3000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [client.length]);

  const visibleImages = client.slice(currentIndex, currentIndex + 3);
  return (
    <>
      <AnimatePresence initial={false}>
        {visibleImages.map((image, index) => (
          <motion.div
            key={index}
            className=" w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={image.logo}
              alt={`Client Logo ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default ClientList;

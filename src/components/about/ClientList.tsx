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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % client.length);
    }, 3000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [client.length]);

  const displayClients = client.slice(currentIndex, currentIndex + 3);
  return (
    <>
      <AnimatePresence>
        {displayClients.map((item, index) => (
          <motion.img
            key={index}
            src={item.logo}
            alt="Client Logo"
            className="w-full h-full"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default ClientList;

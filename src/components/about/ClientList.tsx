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
    { logo: acciona },
    { logo: kyriarch },
    { logo: bcArch },
    { logo: olos },
    { logo: usn },
    { logo: oneArellano },
    { logo: rsBuilders },
    { logo: amberBuilders },
    { logo: letterR },
    { logo: robArch },
    { logo: DCM },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % client.length);
  //   }, 3000); // Change the interval duration as needed

  //   return () => clearInterval(interval);
  // }, [client.length]);

  // const displayClients = [
  //   client[(currentIndex - 1 + client.length) % client.length],
  //   client[currentIndex],
  //   client[(currentIndex + 1) % client.length],
  // ];

  return (
    <>
      {client.map((item, index) => (
        <img
          key={index}
          src={item.logo}
          alt="Client Logo"
          className="w-20 h-full"
        />
      ))}
    </>
  );
};

export default ClientList;

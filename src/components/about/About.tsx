import ClientList from "./ClientList";
import Marquee from "react-fast-marquee";
import project1 from "../../assets/images/projects/land development.png";
import project2 from "../../assets/images/reprojects/BCC C.jpg";
import project3 from "../../assets/images/reprojects/waterpark.png";
import project4 from "../../assets/images/reprojects/ARENA VIEW 4.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  const paragraphs =
    "Project Manager and Quantity Surveyor with Design, Site Management, and Procurement Experiences.";

  const line1 = [
    "Those experiences help our team identify cost-saving measurements without breaking the design intent and help complete what’s lacking in the plan under 2D drawing.",
    "Our partnership started in 2023, when spectacon and percivalestimate provided management service for a city arena.",
    "We add Geopolitics Analysis to our service to be our own brand of construction cost management.",
    "Politics is an elephant in the room. From the economic policies and interest rate to labor escalation, all are affected by politics.",
    "Our capability to analyze geopolitics situations help us prepare your project from heavy setbacks (e.g.Ukraine-Russian War) and conduct multiple cost plans at no extra cost.",
  ];

  const span1 = "Project Manager";
  const span2 = "Quantity Surveyor";
  const andLetter = "and";
  const pTag = "with Design, Site Management, and Procurement Experiences.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.01,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className="w-full h-full bg-bg lg:h-screen">
        <div className="max-w-[1200px] m-auto">
          <div className="lg:flex lg:h-screen lg:items-center">
            <div className="w-full px-4 lg:grid lg:grid-cols-2 lg:p-0">
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, ease: "easeInOut", duration: 1.2 }}
                  className="text-5xl font-heavy uppercase flex items-center gap-3 lg:text-6xl"
                >
                  <svg
                    className="text-xl text-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M3 21V3h18v18z" />
                  </svg>
                  About us
                </motion.div>

                <div className="mt-7 flex flex-col gap-2 pl-7 text-xs sm:w-[460px] lg:mt-6">
                  <motion.p
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="font-black">
                      {span1.split("").map((char, charIndex) => (
                        <motion.span
                          key={char + "-" + charIndex}
                          variants={letter}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>{" "}
                    {andLetter.split("").map((char, charIndex) => (
                      <motion.span
                        key={char + "-" + charIndex}
                        variants={letter}
                      >
                        {char}
                      </motion.span>
                    ))}{" "}
                    <span className="font-black">
                      {span2.split("").map((char, charIndex) => (
                        <motion.span
                          key={char + "-" + charIndex}
                          variants={letter}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    <span className="font-black">
                      {pTag.split("").map((char, charIndex) => (
                        <motion.span
                          key={char + "-" + charIndex}
                          variants={letter}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </motion.p>

                  <motion.h3
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                  >
                    {line1.map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line.split("").map((char, charIndex) => (
                          <motion.span
                            key={char + "-" + charIndex}
                            variants={letter}
                          >
                            {char}
                          </motion.span>
                        ))}
                        <div className="my-3"></div>
                      </React.Fragment>
                    ))}
                  </motion.h3>

                  {/* <p>
                    Those experiences help our team identify cost-saving
                    measurements without breaking the design intent and help
                    complete what’s lacking in the plan under 2D drawing.
                  </p>
                  <p>
                    Our partnership started in 2023, when spectacon and
                    percivalestimate provided management service for a city
                    arena.
                  </p>
                  <p>
                    We add Geopolitics Analysis to our service to be our own
                    brand of construction cost management.
                  </p>
                  <p>
                    Politics is an elephant in the room. From the economic
                    policies and interest rate to labor escalation, all are
                    affected by politics.
                  </p>
                  <p>
                    Our capability to analyze geopolitics situations help us
                    prepare your project from heavy setbacks (e.g.
                    Ukraine-Russian War) and conduct multiple cost plans at no
                    extra cost.
                  </p> */}
                </div>
                <div className="hidden lg:block lg:py-3 lg:pl-7">
                  <Link
                    to="/experience"
                    className="hidden lg:flex lg:font-bold lg:uppercase lg:text-xl lg:tracking-tighter lg:py-1"
                  >
                    Contact Us
                  </Link>
                  <div className="max-w-96">
                    <Marquee>
                      <div className="max-w-full flex gap-1 mx-3 lg:gap-3 lg:bg-no-repeat">
                        <ClientList />
                      </div>
                    </Marquee>
                  </div>
                </div>
              </div>
              <div className="py-5 lg:p-0 lg:relative">
                <div className="flex justify-end lg:justify-start">
                  <h1 className="text-white font-heavy uppercase text-2xl text-right leading-6 flex flex-col lg:text-5xl lg:right-0 lg:text-left">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                    >
                      COLLABORATION
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5,
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                      className="text-orange"
                    >
                      WITH OVERSIGHT
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 35 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7,
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                    >
                      MANAGEMENT
                    </motion.span>
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-1 w-full relative py-7 lg:grid-cols-1 lg:py-2 lg:absolute lg:top-[120px]">
                  <div className="flex flex-col max-w-20 lg:hidden">
                    <ClientList />
                  </div>

                  <div className="lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4">
                    <div className="col-span-2 col-start-2">
                      <img className="w-full h-full" src={project1} alt="" />
                    </div>
                    <div className="col-span-2 col-start-4">
                      {" "}
                      <img className="w-full h-full" src={project2} alt="" />
                    </div>
                    <div className="col-span-3 row-start-2">
                      <img className="w-full h-full " src={project3} alt="" />
                    </div>
                    <div className="col-span-2 col-start-4 row-start-2">
                      {" "}
                      <img className="w-full h-full" src={project4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

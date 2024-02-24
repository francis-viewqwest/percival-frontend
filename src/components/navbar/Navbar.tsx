import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Experience",
      path: "/experience",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];

  return (
    <>
      <div className="w-full h-full p-4 text-white bg-bg lg:pb-0">
        <div className=" max-w-[1200px] m-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="text-lg font-black flex flex-col text-white leading-5"
              >
                spectacon
                <p className="font-normal">
                  percival
                  <span className="font-black text-orange">estimate</span>
                </p>
              </Link>
            </div>
            <div>
              <ul className="hidden lg:flex gap-6">
                {navLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={`font-heavy uppercase transition-all ease-out ${
                        location.pathname === item.path && "text-orange"
                      }`}
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-heavy uppercase right-0 text-sm text-right leading-5 flex flex-col">
                Project Manager <span>Quantity Surveyor</span>
              </h1>
            </div>
          </div>
          <div className="py-6 lg:hidden">
            <ul className="flex gap-6">
              {navLink.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`font-heavy uppercase ${
                      location.pathname === item.path && "text-orange"
                    }`}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

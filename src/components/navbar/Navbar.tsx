import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Work",
      path: "/work",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];

  return (
    <>
      <div className="navbar text-[#FFFFFF]">
        <div className="navbar-start text-[#FFFFFF]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navLink.map((item, index) => (
                <li key={index}>
                  <Link className="font-black uppercase" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="text-xl font-black flex flex-col text-white">
            spectacon
            <p className="font-normal">
              percival<span className="font-black text-orange">estimate</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link className="font-black uppercase" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="font-black w-64 text-xl hidden lg:block">
            Project Manager Quantity Surveyor
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

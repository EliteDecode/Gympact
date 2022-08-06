import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiDocumentSearch } from "react-icons/hi";
import { MdHouse } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="">
        <div className=" py-5 sm:py-5 flex flex-row items-center justify-between bg-teal-800 px-5 sm:px-24">
          <Link to="/">
            <div className="flex flex-row items-center space-x-2">
              <h4 className="font-bold text-2xl text-teal-50 capitalise cursor-pointer">
                Gympact
              </h4>
              <GiWeightLiftingUp className="text-teal-50  font-black text-xl" />
            </div>
          </Link>
          <div className="flex flex-row items-center space-x-3 ">
            <Link
              to="/"
              className="list-none flex flex-row items-center space-x-1 my-3 py-1 sm:flex hidden "
              onClick={displayMenu}
            >
              <MdHouse className="text-teal-50" />
              <h6 className=" text-md font-semibold text-white">Home</h6>
            </Link>
            <Link
              to="/excercises"
              className="list-none flex flex-row items-center space-x-1 my-3 py-1 sm:flex hidden "
              onClick={displayMenu}
            >
              <CgGym className="text-teal-50" />
              <h6 className=" text-md font-semibold text-white">Exercises</h6>
            </Link>
            <Link
              to="/search"
              className="list-none flex flex-row items-center space-x-1 my-3 py-1 sm:flex hidden "
              onClick={displayMenu}
            >
              <HiDocumentSearch className="text-teal-50" />
              <h6 className=" text-md font-semibold text-white">Search</h6>
            </Link>

            <AiOutlineMenu
              className="text-4xl border-2 p-1 border-teal-50 text-white rounded-md sm:hidden block"
              onClick={displayMenu}
            />
          </div>
        </div>
        <div className=" justify-end flex px-3 sm:px-20">
          <div
            className={`${
              showMenu
                ? "border-2 -mt-2 border-teal-50 bg-teal-900 px-2 py-2 w-40 rounded-md flex absolute menu-show"
                : "menu-hide border-2 -mt-2 border-teal-50 bg-teal-900 px-2 py-2 w-40 rounded-md flex absolute"
            }`}
          >
            <ul>
              <Link
                to="/"
                className="list-none flex flex-row items-center space-x-2 my-3 py-1 "
                onClick={displayMenu}
              >
                <MdHouse className="text-teal-400" />
                <h6 className="text-gray-100 text-sm">Home</h6>
              </Link>
              <Link
                to="/excercises"
                className="list-none flex flex-row items-center space-x-2 my-3 py-1 "
                onClick={displayMenu}
              >
                <CgGym className="text-teal-400" />
                <h6 className="text-gray-100 text-sm"> Excercises</h6>
              </Link>
              <Link
                to="/search"
                className="list-none flex flex-row items-center space-x-2 my-3 py-1 "
                onClick={displayMenu}
              >
                <HiDocumentSearch className="text-teal-400" />
                <h6 className="text-gray-100 text-sm">Search</h6>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

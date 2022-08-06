import React from "react";

import { CgGym } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { HiDocumentSearch } from "react-icons/hi";
import { MdHouse } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-teal-800  py-4 sm:py-6  px-5 sm:px-24">
      <div className="mt-1">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2">
            <h4 className="font-bold text-lg opacity-90 text-teal-50 capitalise cursor-pointer">
              Gympact
            </h4>
            <GiWeightLiftingUp className="text-teal-100 text-xl" />{" "}
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-start sm:justify-start space-x-3 my-2 sm:my-6">
        <Link
          to="/"
          className="list-none flex flex-row items-center space-x-1 my-3 py-1  "
        >
          <MdHouse className="text-teal-400" />
          <h6 className=" text-md font-semibold text-white">Home</h6>
        </Link>
        <Link
          to="/excercises"
          className="list-none flex flex-row items-center space-x-1 my-3 py-1  "
        >
          <CgGym className="text-teal-400" />
          <h6 className=" text-md font-semibold text-white">Exercises</h6>
        </Link>
        <Link
          to="/search"
          className="list-none flex flex-row items-center space-x-1 my-3 py-1  "
        >
          <HiDocumentSearch className="text-teal-400" />
          <h6 className=" text-md font-semibold text-white">Search</h6>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-start mt-3">
        <h3 className="text-xs opacity-80 font-bold text-white">
          Codes@EliteDe_Code
        </h3>
      </div>
    </div>
  );
};

export default Footer;

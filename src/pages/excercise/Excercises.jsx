import React from "react";
import Excercise from "../../components/Excercise/Excercise";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../footer/Footer";

const Excercises = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-teal-50 py-0 sm:py-1 px-5 sm:px-24">
        <div className="-mt-16 ">
          <Search isExcercisePage />
        </div>
        <Excercise />
      </div>
      <Footer />
    </>
  );
};

export default Excercises;

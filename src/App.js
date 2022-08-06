import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import Excercise from "./components/Excercise/Excercise";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Footer from "./pages/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50 py-0 sm:py-1 px-5 sm:px-24">
        <Banner />
        <Search />
        <Excercise simplified />
      </div>
      <Footer />
    </>
  );
};

export default App;

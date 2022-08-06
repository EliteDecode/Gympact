import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <section className="py-2  flex-row items-center  sm:flex">
      <div className="py-4 sm:py-8 hidden sm:flex flex-col">
        <Fade bottom>
          <h1 className="font-semibold  text-3xl  text-teal-600 mt-12 sm:mt-0">
            Gympact Fitness Club
          </h1>
        </Fade>
        <Fade bottom>
          <p className="text-3xl sm:text-5xl font-semibold leading-tight text-gray-900 mt-8 mb-10 ">
            Sweat, Smile And Repeat
          </p>
        </Fade>
        <Fade bottom>
          <p className="opacity-90 text-xs my-3  sm:text-sm">
            Check out the most effective exercises personalized to you
          </p>
        </Fade>
        <Fade bottom>
          <Link to="/excercises">
            <button className="bg-teal-500 text-gray-50 mt-8 py-3 px-2 text-md font-bold rounded-md">
              Explore Excercises
            </button>
          </Link>
        </Fade>
      </div>
      <div className="mt-12 sm:mt-12 relative justify-end sm:flex border-t-4  border-teal-600">
        <Fade bottom>
          <img src={banner} alt="banner" className="banner" />
        </Fade>
        <Fade right>
          <h1 className="font-semibold flex sm:hidden flex-row justify-end text-sm  text-teal-600 mt-2 sm:mt-0 ">
            Gympact Fitness Club
          </h1>
        </Fade>
      </div>
    </section>
  );
};

export default Banner;

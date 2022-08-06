import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const breaks = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 4 },
  { width: 998, itemsToShow: 4 },
];

const SimilarExcercise = ({ dataTargets, dataEquipments, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center my-12">
        <Loading />
      </div>
    );
  }
  return (
    <div className="py-5 mt-5">
      <div className="my-2">
        <h1 className="text-lg sm:text-2xl font-bold capitalize">
          Similar <span className="text-red-400">Target muscles</span> exercise
        </h1>
        <div className="tage">
          <Carousel
            breakPoints={breaks}
            enableAutoPlay
            autoPlaySpeed={2500}
            className="p-1"
          >
            {dataTargets?.slice(0, 5).map((item) => {
              const { gifUrl, id, name } = item;

              return (
                <div
                  className="p-4 bg-white mt-4 mx-1 rounded-md border-t-4 border-teal-600 shadow-lg shadow-gray-300"
                  key={id}
                >
                  <img src={gifUrl} alt="" />

                  <h6 className="font-semibold text-md opacity-90 text-teal-700 uppercase mt-6">
                    {name}
                  </h6>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-lg sm:text-2xl font-bold capitalize">
          Similar <span className="text-red-400">Technique</span> for this
          exercise
        </h1>
        <div className="tage">
          <Carousel
            breakPoints={breaks}
            enableAutoPlay
            autoPlaySpeed={2500}
            className="p-1"
          >
            {dataEquipments?.slice(0, 5).map((item) => {
              const { gifUrl, id, name } = item;

              return (
                <div
                  className="p-4 bg-white mt-4 mx-1 rounded-md border-t-4 border-teal-600 shadow-lg shadow-gray-300"
                  key={id}
                >
                  <img src={gifUrl} alt="" />

                  <h6 className="font-semibold text-md opacity-90 text-teal-700 uppercase mt-6">
                    {name}
                  </h6>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SimilarExcercise;

import React from "react";

import targetImg from "../assets/icons/target.png";
import equipmentImg from "../assets/icons/equipment.png";
import gym from "../assets/icons/body-part.png";
const Detail = ({ dataExcercise }) => {
  const { gifUrl, bodyPart, equipment, name, target } = dataExcercise;
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 space-x-2  py-12">
        <div className="">
          {" "}
          <img
            src={gifUrl}
            alt="gif"
            style={{ width: "500px" }}
            className="border-t-4 border-teal-500"
          />
        </div>
        <div className="py-5 justify-center  flex flex-col">
          <h1 className="text-2xl my-2 sm:text-4xl font-bold capitalize">
            {name}
          </h1>
          <p className="text-lg font-normal">
            Exercises keep you strong. {name} bup is one of the best exercises
            to target your {target}. It will help you improve your mood and gain
            energy.
          </p>
          <div className="my-4 flex flex-col space-y-3">
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={targetImg}
                alt="target"
                className="rounded-full bg-white border-2 border-teal-300 p-1.5"
              />
              <h1 className="font-semibold text-xl capitalize"> {target}</h1>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={equipmentImg}
                alt="target"
                className="rounded-full bg-white border-2 border-teal-300 p-1.5"
              />
              <h1 className="font-semibold text-xl capitalize"> {equipment}</h1>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={gym}
                alt="target"
                className="rounded-full bg-white border-2 border-teal-300 p-1.5"
              />
              <h1 className="font-semibold text-xl capitalize"> {bodyPart}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

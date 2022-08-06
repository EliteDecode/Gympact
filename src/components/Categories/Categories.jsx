import React from "react";
import Carousel from "react-elastic-carousel";
import { useGlobalContext } from "../../context";
import "./category.css";
import icon from "../../assets/icons/gym.png";
const breaks = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 4 },
  { width: 998, itemsToShow: 4 },
];

const Categories = () => {
  const { bodyParts, setBodyPart, bodyPart } = useGlobalContext();

  return (
    <section>
      {" "}
      <Carousel
        breakPoints={breaks}
        enableAutoPlay
        autoPlaySpeed={2500}
        className="p-1"
      >
        {bodyParts?.map((item, index) => {
          return (
            <div
              className="px-5 py-12 sm:py-24 border-t-4 mx-2 border-teal-500
                bg-white my-12  cursor-pointer hover:shadow-lg hover:shadow-gray-300 text-center flex-col items-center flex justify-center  "
              key={index}
              onClick={() => {
                setBodyPart(item);
              }}
            >
              <img src={icon} alt="icon" style={{ width: "20%" }} />
              <h3 className="mt-4 font-semibold">{item}</h3>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Categories;

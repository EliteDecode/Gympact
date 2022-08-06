import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import voidImg from "../../assets/void.svg";
import Fade from "react-reveal/Fade";

const Excercise = ({ simplified }) => {
  const { excercises, searchTerm, bodyPart, loading } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const excercisesPerPage = simplified ? 8 : 20;

  const indexOfLastExcercise = currentPage * excercisesPerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage;
  const currentExcercise = excercises.slice(
    indexOfFirstExcercise,
    indexOfLastExcercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center my-12">
        <Loading />
      </div>
    );
  }

  return (
    <div className="py-5">
      <h3 className="mt-1 sm:mt-5 font-semibold opacity-90 text-xl sm:text-3xl text-teal-700">
        Showing Excercises
      </h3>

      {searchTerm && (
        <h3 className="mt-1 sm:mt-5 font-normal opacity-90 text-md sm:text-xl text-dark-700">
          Showing Results for <span className="font-bold">"{searchTerm}"</span>
        </h3>
      )}
      {bodyPart && (
        <h3 className="mt-1 sm:mt-5 font-normal opacity-90 text-md sm:text-xl text-dark-700">
          Showing Results for <span className="font-bold"> "{bodyPart}"</span>
        </h3>
      )}

      {currentExcercise?.length === 0 && (
        <div className="flex  flex-col items-center justify-center mt-8 mb-3">
          <img src={voidImg} alt="nothing found" className="voidImg" />
          <h1 className="text-sm sm:text-xl font-semibold mt-5">
            Nothing Found...
          </h1>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-4">
        {currentExcercise?.map((item) => {
          const { gifUrl, target, bodyPart, id, name } = item;

          return (
            <Fade bottom>
              <Link to={`/excercise/${id}`}>
                <div
                  className="p-4 bg-white mt-4 rounded-md border-t-4 border-teal-600 shadow-lg shadow-gray-300"
                  key={id}
                >
                  <img src={gifUrl} alt="" />

                  <div className="flex flex-row items-center  space-x-4">
                    <button className="bg-white border-2 border-teal-600 text-teal-500 text-md p-2 font-semibold rounded-lg">
                      {target}
                    </button>
                    <button className="bg-teal-500 border-2 border-gray-50 text-white text-md p-2 font-semibold rounded-lg">
                      {bodyPart}
                    </button>
                  </div>

                  <h6 className="font-semibold text-md opacity-90 text-teal-700 uppercase mt-6">
                    {name.length > 20 ? `${name.substring(0, 25)}...` : name}
                  </h6>
                </div>
              </Link>
            </Fade>
          );
        })}
      </div>
      <div className="py-1  sm:py-3 flex">
        {excercises?.length > 8 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            variant="outlined"
          />
        )}
      </div>
    </div>
  );
};

export default Excercise;

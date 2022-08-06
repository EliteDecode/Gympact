import React from "react";
import Categories from "../Categories/Categories";
import { useGlobalContext } from "../../context";

const Search = ({ isExcercisePage, isSearchPage }) => {
  const { HandleSearch, setSearchTerm } = useGlobalContext();
  return (
    <section className="py-5 mt-16">
      <h3 className="mt-1 sm:mt-5 font-semibold opacity-90 text-xl sm:text-3xl text-teal-700">
        Browse Excercises
      </h3>
      {!isExcercisePage && (
        <div className=" flex flex-row items-center   mt-4 border-2 border-teal-500 bg-white rounded-full">
          <input
            type="text"
            style={{ width: "100%", outline: "none" }}
            className="py-2 px-6 bg-white sm:py-3 rounded-full"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            placeholder="e.g. Legs"
          />
          <button
            className="bg-teal-500 text-gray-50 py-2 sm:py-3 px-2 rounded-full text-md sm:text-md font-bold border-2 border-teal-500 hover:bg-white hover:text-teal-500 "
            onClick={HandleSearch}
          >
            Search
          </button>
        </div>
      )}

      {!isSearchPage && <Categories />}
    </section>
  );
};

export default Search;

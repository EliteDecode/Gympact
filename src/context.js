import React, { useState, useEffect, useContext } from "react";

import {
  fetchBodyPart,
  fetchExcercise,
  fetchExcerciseBodyPart,
  fetchExcerciseId,
  fetchYoutubeExcercise,
  fetchSimilarExcerciseTargets,
  fetchSimilarExcerciseEquipments,
} from "./api/ExcerciseApi";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [bodyParts, setBodyParts] = useState([]);
  const [excercises, setExcercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bodyPart, setBodyPart] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchBodyPart().then((data) => {
      setLoading(false);
      setBodyParts(["all", ...data]);
    });

    fetchExcercise().then((data) => {
      setLoading(false);
      setExcercises(data);
    });
  }, []);

  useEffect(() => {
    if (bodyPart === "all") {
      setLoading(true);
      fetchExcercise().then((data) => {
        setLoading(false);
        window.scrollTo({ top: 900, behavior: "smooth" });
        setExcercises(data);
      });
    } else {
      fetchExcerciseBodyPart(bodyPart).then((data) => {
        setLoading(false);
        window.scrollTo({ top: 900, behavior: "smooth" });
        setExcercises(data);
      });
    }
  }, [bodyPart]);

  const HandleSearch = () => {
    if (searchTerm !== "") {
      fetchExcercise().then((data) => {
        const searchedExcercise = data.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(searchTerm) ||
            exercise.target.toLowerCase().includes(searchTerm) ||
            exercise.equipment.toLowerCase().includes(searchTerm) ||
            exercise.bodyPart.toLowerCase().includes(searchTerm)
        );
        setSearchTerm("");
        setExcercises(searchedExcercise);
        window.scrollTo({ top: 1200, behaviour: "smooth" });
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        loading,
        setSearchTerm,
        bodyParts,
        excercises,
        HandleSearch,
        setBodyPart,
        bodyPart,
        fetchExcerciseId,
        fetchYoutubeExcercise,
        fetchSimilarExcerciseTargets,
        fetchSimilarExcerciseEquipments,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

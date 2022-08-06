import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail";
import YoutubeDetail from "../../components/YoutubeDetail";
import SimilarExcercise from "../../components/SimilarExcercise";
import Loading from "../../components/Loading";
import Footer from "../footer/Footer";

const SingleExcercise = () => {
  const {
    fetchExcerciseId,
    fetchYoutubeExcercise,
    fetchSimilarExcerciseTargets,
    fetchSimilarExcerciseEquipments,
    setLoading,
    loading,
  } = useGlobalContext();
  const [dataExcercise, setDataExcercise] = useState({});
  const [dataYoutube, setDataYoutube] = useState([]);
  const [dataTargets, setDataTargets] = useState([]);
  const [dataEquipments, setDataEquipments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchExcerciseId(id).then((data) => {
      setLoading(false);
      setDataExcercise(data);
      fetchSimilarExcerciseTargets(data.target).then((data) => {
        setDataTargets(data);
      });
      fetchSimilarExcerciseEquipments(data.equipment).then((data) => {
        setDataEquipments(data);
      });
      fetchYoutubeExcercise(data.name).then((data) => {
        setDataYoutube(data.contents);
      });
    });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex flex-row justify-center items-center my-12">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-teal-50 py-0 sm:py-1 px-5 sm:px-24">
        <Detail dataExcercise={dataExcercise} />
        <YoutubeDetail
          dataYoutube={dataYoutube}
          name={dataExcercise.name}
          loading={loading}
        />
        <SimilarExcercise
          dataTargets={dataTargets}
          dataEquipments={dataEquipments}
          loading={loading}
        />
      </div>
      <Footer />
    </>
  );
};

export default SingleExcercise;

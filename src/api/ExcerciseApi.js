const URL_BODY_PART =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

const URL_Ex_BODY_PART =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPart/";
const URL_ALL = "https://exercisedb.p.rapidapi.com/exercises";

const URL_Exercise_ID = "https://exercisedb.p.rapidapi.com/exercises/exercise/";
const URL_Youtube = "https://youtube-search-and-download.p.rapidapi.com";

const ExcerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const YoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchBodyPart = async () => {
  const response = await fetch(URL_BODY_PART, ExcerciseOptions);

  const data = await response.json();

  return data;
};

export const fetchExcercise = async () => {
  const response = await fetch(URL_ALL, ExcerciseOptions);

  const data = await response.json();

  return data;
};

export const fetchExcerciseBodyPart = async (bodyPart) => {
  const response = await fetch(
    `${URL_Ex_BODY_PART}${bodyPart}`,
    ExcerciseOptions
  );

  const data = await response.json();

  return data;
};

export const fetchExcerciseId = async (id) => {
  const response = await fetch(`${URL_Exercise_ID}${id}`, ExcerciseOptions);

  const data = await response.json();

  return data;
};

export const fetchYoutubeExcercise = async (exerciseDetailData) => {
  const response = await fetch(
    `${URL_Youtube}/search?query=${exerciseDetailData} exercise`,
    YoutubeOptions
  );

  const data = await response.json();

  return data;
};

export const fetchSimilarExcerciseTargets = async (target) => {
  const response = await fetch(`${URL_ALL}/target/${target}`, ExcerciseOptions);

  const data = await response.json();

  return data;
};

export const fetchSimilarExcerciseEquipments = async (equipment) => {
  const response = await fetch(
    `${URL_ALL}/equipment/${equipment}`,
    ExcerciseOptions
  );

  const data = await response.json();

  return data;
};

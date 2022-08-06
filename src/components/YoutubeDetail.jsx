import React from "react";
import Loading from "./Loading";

const YoutubeDetail = ({ dataYoutube, name, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center my-12">
        <Loading />
      </div>
    );
  }
  return (
    <div className="py-5 mt-5 sm:mt-16 ">
      <h1 className="text-lg sm:text-2xl font-bold capitalize">
        Watch <span className="text-red-400">{name}</span> exercise videos
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-4 gap-8 mt-8">
        {dataYoutube?.slice(0, 4).map((item, index) => {
          return (
            <a
              key={index}
              className="exercise-video my-3"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  borderTopLeftRadius: "20px",
                  height: "200px",
                  width: "100%",
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <div>
                <h1 className="my-2 font-bold text-md sm:text-xl">
                  {item.video.title}
                </h1>

                <h6 className="text-sm sm:text-md">{item.video.channelName}</h6>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default YoutubeDetail;

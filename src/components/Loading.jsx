import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Oval
        ariaLabel="three-dots-loading"
        color="#0d9488"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loading;

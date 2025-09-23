import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-36">
      <div className="animate-pulse bg-black/80 p-4 rounded-md">
        <h1 className="text-white text-xl font-bold">Searching movies...</h1>
      </div>
    </div>
  );
};

export default Loading;

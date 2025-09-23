import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="flex pt-30 justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 bg-black/80 rounded-md w-1/2 text-white"
      >
        <input
          className="col-span-8 m-4 border-1 border-white px-2 rounded-lg"
          placeholder="What do you want to watch today?"
        />
        <button className="col-span-4 m-4 py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

import React from "react";

const MovieTitle = ({ title, original_title, original_language, overview }) => {
  return (
    <div className="pt-36 px-20 absolute w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold w-1/3 py-2 text-white">{title}</h1>
      {original_language != "en" && (
        <h1 className="font-bold text-2xl w-1/3 text-white">
          {original_title}
        </h1>
      )}
      <p className="w-1/3 text-xl text-white">{overview}</p>
      <div className="flex gap-3 pt-4">
        <button className="flex items-center justify-center bg-white text-xl hover:bg-white/80 text-black py-3 px-8 cursor-pointer rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.38 2.875-1.615l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.375 20.347c-1.346.765-2.875-.189-2.875-1.615V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="flex items-center justify-center bg-white/25 hover:bg-white/15 cursor-pointer text-white text-xl py-3 px-8 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;

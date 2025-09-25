import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-35">
      {movie &&  (
        <img
          alt={movie?.title}
          src={IMG_CDN_URL + movie?.poster_path}
          className="text-2xl text-white"
        />
      )}
    </div>
  );
};

export default MovieCard;

import React from "react";
import MovieBg from "./MovieBg";
import MovieTitle from "./MovieTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  const { title, original_title, original_language, overview, id } = mainMovie;

  return (
    <div>
      <MovieTitle
        title={title}
        original_title={original_title}
        original_language={original_language}
        overview={overview}
      />
      <MovieBg movieId={id} />
    </div>
  );
};

export default MainContainer;

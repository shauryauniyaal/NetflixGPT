import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loading from "./Loading";

const GPTSearchResults = () => {
  const movieData = useSelector((store) => store.gpt.movieData);
  const isGptLoading = useSelector((store) => store.gpt.isGptLoading);
  const mainMovies = movieData?.map((movie) => movie[0]);
  console.log(mainMovies);

  return !isGptLoading ? (
    movieData && (
      <div className="mt-6 bg-black/80">
        <MovieList title={"Search Results: "} movies={mainMovies} />
      </div>
    )
  ) : (
    <Loading />
  );
};

export default GPTSearchResults;

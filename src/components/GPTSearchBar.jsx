import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  toggleGptLoading,
  addGptMovieList,
  addMovieData,
} from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import client from "../utils/openai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const userInput = useRef(null);

  const handleGptSearchClick = async () => {
    // Early return if no input
    if (!userInput.current?.value) return;

    try {
      dispatch(toggleGptLoading());

      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        userInput.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies =
        chatCompletion.choices?.[0]?.message?.content.split(",");
      const promiseArr = gptMovies.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArr);

      dispatch(addGptMovieList(gptMovies));
      dispatch(addMovieData(TMDBResults));
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      dispatch(toggleGptLoading());
    }
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="flex pt-30 justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 bg-black/80 rounded-md w-1/2 text-white"
      >
        <input
          ref={userInput}
          className="col-span-8 m-4 border-1 border-white px-2 rounded-lg"
          placeholder="What do you want to watch today?"
        />
        <button
          className="col-span-4 m-4 py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

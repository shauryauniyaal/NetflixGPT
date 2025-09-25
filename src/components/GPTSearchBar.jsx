import React, { useRef } from "react";
import {
  addGptMovieDesc,
  addGptMovieList,
  addMainMovieData,
  addMovieData,
  toggleGptLoading,
} from "../utils/gptSlice";
import useSearchMovieTMDB from "../hooks/useSearchMovieTMDB";
import { useDispatch } from "react-redux";
import client from "../utils/openai";

const GPTSearchBar = () => {
  const userInput = useRef(null);
  const dispatch = useDispatch();
  const TMDBResultsHandler = useSearchMovieTMDB;

  const handleGptSearchClick = async () => {
    if (!userInput.current?.value) return;

    try {
      dispatch(toggleGptLoading());

      const gptMovieSearchQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        userInput.current.value +
        ". You can also go for deep cuts not just provide all generic movies. Only give me names,the correct release year (make sure to check it on the internet) and the one line description (it should not contain any commas; ommit all of them from the description) of 5 movies, comma separated (without any spaces between commas) like the example result given ahead. Example Result: Gadar^2001^<description>,Sholay^1975^<description>,Don^1978^<description>,Golmaal^1979^<description>,Koi Mil Gaya^2003^<description>";

      const chatCompletion01 = await client.chat.completions.create({
        messages: [{ role: "user", content: gptMovieSearchQuery }],
        model: "gpt-5-nano",
      });

      const gptMovies =
        chatCompletion01.choices?.[0]?.message?.content.split(",");
      const splitMoviesArr = [];
      const promiseArr = gptMovies.map((movie) => {
        const movieDeets = movie.split("^");
        splitMoviesArr.push(movieDeets);
        return TMDBResultsHandler(movieDeets[0], movieDeets[1]);
      });

      const movieDescs = splitMoviesArr.map((movie) => movie[2]);

      dispatch(addGptMovieDesc(movieDescs));

      const TMDBResults = await Promise.all(promiseArr);

      const gptFilterQuery =
        "From this array named TMDBResults, " +
        JSON.stringify(TMDBResults) +
        " Each element contains an array of objects which have movie data. Give me a JS array with the JS object of the movie which best fits the description of each element in the array. The description array is: " +
        JSON.stringify(movieDescs) +
        " Each element in this description array contains a description. Search for the movie that best fits the description inside TMDBResutls. You have to search like this: The first element in the description array will be used to search the first element in TMDBResults and the second element in the description array will be used to search the second element in TMDBResults and so on and then push the correct JS object inside an array and give me the array. Make sure its parsable using JSON function.";

      const chatCompletion02 = await client.chat.completions.create({
        messages: [{ role: "user", content: gptFilterQuery }],
        model: "gpt-5-nano",
      });

      console.log(chatCompletion02.choices?.[0]?.message?.content);

      const mainMovieData = JSON.parse(
        chatCompletion02.choices?.[0]?.message?.content
      );

      dispatch(addGptMovieList(splitMoviesArr));
      dispatch(addMovieData(TMDBResults));
      dispatch(addMainMovieData(mainMovieData));
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      dispatch(toggleGptLoading());
    }
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

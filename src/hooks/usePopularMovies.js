import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    !popularMovies && dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

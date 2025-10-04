import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    !upcomingMovies && dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVids = async () => {
    try {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers.length != 0 ? trailers[0] : json.results[0];
      !trailerVideo && dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieVids();
  }, []);
};

export default useMovieTrailer;

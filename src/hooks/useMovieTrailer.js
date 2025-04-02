import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = response.data.results;
    const trailers = data.filter(
      (movie) =>
        movie.type === "Trailer" && movie.site === "YouTube" && movie.official
    );
    const mainTrailer = trailers.length
      ? trailers.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        )[0]
      : data[0];
    dispatch(addTrailerVideo(mainTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?",
      API_OPTIONS
    );
    console.log(response);
    dispatch(addTrendingMovies(response.data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;

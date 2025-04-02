import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    console.log(response);
    dispatch(addPopularMovies(response.data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

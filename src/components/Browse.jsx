import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const toggle = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {toggle ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecContainer />
        </>
      )}
    </div>
  );
}

export default Browse;

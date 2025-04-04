import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecContainer() {
  const movies = useSelector((store) => store.movies);

  if (
    !movies.nowPlayingMovies ||
    !movies.trendingMovies ||
    !movies.popularMovies ||
    !movies.upcomingMovies
  )
    return;

  return (
    <div className="bg-black text-white -mt-10 relative z-20">
      {/* Movie list component  */}
      <div>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
}

export default SecContainer;

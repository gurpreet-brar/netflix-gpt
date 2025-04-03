import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { gptMovies, tmdbMovies } = useSelector((store) => store.gpt);

  if (!gptMovies) return null;
  console.log(tmdbMovies);
  return (
    <div className="text-white ">
      {gptMovies.map((movie, index) => (
        <MovieList key={index} title={movie} movies={tmdbMovies[index]} />
      ))}
    </div>
  );
}

export default GptMovieSuggestions;

import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="px-12 pt-8 ">
      <h1 className="text:md sm:text-lg pb-4"> {title}</h1>
      <div className="flex overflow-x-scroll overflow-y-visible">
        <div className="flex gap-2">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

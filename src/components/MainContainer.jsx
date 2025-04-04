import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBack from "./VideoBack";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  if (!movies) return;
  const mainMovie = movies[7];

  const { title, overview, id } = mainMovie;
  return (
    <div className="pt-[22%] bg-black sm:pt-10 md:pt-6">
      <VideoTitle title={title} overview={overview} />
      <VideoBack movieId={id} />
    </div>
  );
}

export default MainContainer;

import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { HERO } from "../utils/constants";

function GptSearch() {
  return (
    <div
      className="bg-scroll top-0 left-0 w-full h-full relative "
      style={{ backgroundImage: `url(${HERO})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-1"></div>
      <div className="pb-20 relative z-10 min-h-[100vh] ">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch;

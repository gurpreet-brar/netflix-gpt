import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { HERO } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="w-full h-screen absolute -z-10 ">
        <img
          src={HERO}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70 -z-5"></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;

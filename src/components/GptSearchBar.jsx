import { useRef } from "react";
import { openai } from "../utils/openai";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

function GptSearchBar() {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    //Make an api call here
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " .Only give me 5 movie names that are comma separated like the example result givent ahead. Example Result: Gadar, Wicked, Snow, Intern, Harry Potter";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResults.choices);

    if (!gptResults.choices) {
    }

    const gptData = gptResults.choices?.[0]?.message?.content.split(",");
    const tmdbData = await Promise.all(
      gptData.map((movie) => searchMovie(movie))
    );
    dispatch(addGptMovies({ movies: gptData, movieResults: tmdbData }));

    searchText.current.value = "";
  };

  // search movie in tmdb
  const searchMovie = async (movie) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    return response.data.results;
  };

  return (
    <div className="md:pt-[15%] pt-[25%] flex justify-center">
      <form
        className="md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-2 px-4 m-4 col-span-9 bg-white rounded-md outline-0 text-sm sm:text-md"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 text-sm sm:text-md bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;

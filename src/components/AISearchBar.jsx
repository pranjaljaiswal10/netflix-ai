import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addAIMovie, addMovieTitle, addTitleMovie } from "../utils/searchSlice";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { API_OPTIONS, BG_URL } from "../utils/constant";
import SearchPageShimmer from "./SearchPageShimmer";

const AISearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);
  const option = useSelector((store) => store.option.searchType);
  async function searchMovies(name) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    if (option === "AI") {
      return data.results;
    }
    if (option === "Title") {
      dispatch(addTitleMovie(data.results));
      setIsLoading(false);
    }
  }
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const normalQuery = () => {
    dispatch(addMovieTitle(searchTxt));
    searchMovies(searchTxt);
  };
  const geminiQuery = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const prompt = `Act as a Movie Recommendation system and suggest some movies for the query :${searchTxt} . only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];
    const result = await model.generateContent(prompt, safetySettings);
    const response = await result.response;
    const text = response.text();
    const movieName = text.split(", ");
    dispatch(addMovieTitle(movieName));
    const promises = Promise.all(
      movieName.map((item) => {
        return searchMovies(item);
      })
    );
    const tmdbMvies = await promises;
    dispatch(addAIMovie(tmdbMvies));
    setIsLoading(false);
  };
  const handleOnClick = () => {
    setIsLoading(true);
    option === "AI" ? geminiQuery() : normalQuery();
  };
  return (
    <>
      <div>
        <div className="fixed  -z-10 ">
          <img
            src={BG_URL}
            alt=""
            className="object-cover md:h-full h-screen w-screen "
          />
        </div>
        <div className="flex justify-center md:pt-[10%] pt-[25%] ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex bg-black w-full  md:w-1/2  p-3 text-sm sm:text-base rounded  "
          >
            <input
              type="text"
              placeholder={lang[identifier].gptSearchPlaceholder}
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              className=" py-3 px-3 w-10/12 rounded placeholder:text-slate-500"
            />
            <button
              className="bg-red-700 text-white lg:px-6 py-2 text-sm sm:text-base ml-4 w-2/12  rounded"
              onClick={(e) => handleOnClick(e)}
            >
              {lang[identifier].search}
            </button>
          </form>
        </div>
      </div>
      {isLoading && <SearchPageShimmer />}
    </>
  );
};

export default AISearchBar;

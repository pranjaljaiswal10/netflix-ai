import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addAIMovie, addMovieTitle, addTitleMovie } from "../utils/searchSlice";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constant";
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
    
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-11/12 xl:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto "
          >
            <input
              type="text"
              placeholder={lang[identifier].gptSearchPlaceholder}
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              className="  lg:text-base  sm:text-sm text-xs rounded-l-full font-normal text-black border-black xl:pl-5 sm:pl-4 pl-3   lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:w-9/12 md:w-10/12 w-9/12 sm:w-10/12 lg:w-9/12 placeholder:text-slate-500"
            />
            <button
              className="bg-red-700 text-white  lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:px-8 sm:px-4 px-2 md:px-6 lg:px-8 font-semibold  lg:text-base  sm:text-sm text-xs  xl:w-3/12 md:w-2.5/12 sm:w-2/12 w-1.5/12 lg:w-3/12 rounded-r-full"
              onClick={(e) => handleOnClick(e)}
            >
              {lang[identifier].search}
            </button>
          </form>
     
  );
};

export default AISearchBar;

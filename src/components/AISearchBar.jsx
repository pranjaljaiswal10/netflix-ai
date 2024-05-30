import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addList, addResult } from "../utils/searchSlice";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { API_OPTIONS, BG_URL } from "../utils/constant";
import AIMovieSuggestions from "./AIMovieSuggestions";

const AISearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
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
    dispatch(addResult(data.results));
  }
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const normalQuery = () => {
    dispatch(addList(searchTxt))
    searchMovies(searchTxt);
  };
  const geminiQuery = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});
    const prompt=`Act as a Movie Recommendation system and suggest some movies for the query :${searchTxt} . only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`
    const safetySettings = [
      {
        category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold:HarmBlockThreshold.BLOCK_NONE, 
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
    const result=await model.generateContent(prompt,safetySettings);
   
    
    const response = await result.response;
    const text = response.text();
    const movieName = text.split(", ");
    dispatch(addList(movieName));
    const promises = Promise.all(
      movieName.map((item) => {
        return searchMovies(item);
      })
    );
    const tmdbMvies = await promises;
    dispatch(addResult(tmdbMvies));
  };
  const handleOnClick = () => {
    option === "AI" ? geminiQuery() : normalQuery();
  };
  return (
    <>
    <div className="fixed top-0 w-full -z-10 overflow-hidden">
      <img src={BG_URL} alt="" className="object-cover " />
      </div>
      <div className=" flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-1/2 mx-auto mt-32 bg-black  sm:m-0 ml-10 p-3 text-sm sm:text-base rounded  "
        >
          <input
            type="text"
            placeholder={lang[identifier].gptSearchPlaceholder}
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            className=" py-3 px-3 w-9/12 rounded placeholder:text-slate-500"
          />
          <button
            className="bg-red-700 text-white px-6 py-2 text-sm sm:text-base ml-4 w-3/12  rounded"
            onClick={(e) => handleOnClick(e)}
          >
            {lang[identifier].search}
          </button>
        </form>
        </div>
        <AIMovieSuggestions/>
    </>
  );
};

export default AISearchBar;

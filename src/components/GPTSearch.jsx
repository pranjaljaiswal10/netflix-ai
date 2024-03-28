import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addList, addResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, BG_URL } from "../utils/constant";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);
  const {option}=useSelector((store)=>store.search)
  async function searchMovies(name) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  }
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  
  const  geminiQuery=async(query)=>{
   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
   const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the query ${query}. Only give me name of 5 movies, comma seperated like the example result given ahead.Example result:Gadar, Sholay, Don, Golmaal`;
   const result = await model.generateContent(gptQuery);
   const response = await result.response;
   const text = response.text();
    const movieName=text.split(", ") 
    dispatch(addList(movieName))
   const promises = Promise.all(
     movieName.map((item) => {
       return searchMovies(item);
     })
   );
   const tmdbMvies = await promises;
   dispatch(addResult(tmdbMvies));
 }
  const handleOnClick = () => {
   option==="TitleSearch"?searchMovies(searchTxt):
  geminiQuery()
  }
;
  return (
    <div className="">
        <img src={BG_URL} alt="" className="relative" />
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-center absolute top-40 inset-x-1/3 bg-black p-3 rounded w-2/5">
        <input
          type="text"
          placeholder={lang[identifier].gptSearchPlaceholder}
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)} className="p-3 w-4/5 rounded placeholder:text-slate-500"
        />
        <button className="bg-red-700 text-white px-4 py-2 ml-4 w-1/5 rounded" onClick={(e) => handleOnClick(e)}>{lang[identifier].search}</button>
      </form>
    </div>
  );
};

export default Search;

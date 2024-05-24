import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addList, addResult } from "../utils/searchSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, BG_URL } from "../utils/constant";

const AISearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);
  const option=useSelector((store)=>store.option.searchType)
  console.log(option)
  async function searchMovies(name) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    if(option==="AI")
    {
      return data.results;
    }
    dispatch(addResult(data.results))
  }
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  
  const normalQuery=()=>{
    searchMovies(searchTxt)
}
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
   option==="AI"? geminiQuery():normalQuery()
  }
;
  return (
    <div className="relative ">
        <img src={BG_URL} alt="" className="object-cover h-screen w-screen" />
      <div className="absolute lg:w-4/12 w-8/12 sm:7/12 md:5/12 top-1/4 md:left-1/3 right-1/4 ">
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-center w-full bg-black sm:m-0 ml-10 p-3 text-sm sm:text-base rounded  ">
        <input
          type="text"
          placeholder={lang[identifier].gptSearchPlaceholder}
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)} className=" py-3 px-3 w-9/12 rounded placeholder:text-slate-500"
        />
        <button className="bg-red-700 text-white px-6 py-2 text-sm sm:text-base ml-4 w-3/12  rounded" onClick={(e) => handleOnClick(e)}>{lang[identifier].search}</button>
      </form>
      </div>
    </div>
  
  );
};

export default AISearchBar;

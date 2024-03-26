import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch, useSelector } from "react-redux";
import { addList, addResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, BG_URL } from "../utils/constant";

const GPTSearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);
  async function searchMovies(name) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  }
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const handleOnClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the query ${searchTxt}. Only give me name of 5 movies, comma seperated like the example result given ahead.Example result:Gadar, Sholay, Don, Golmaal`;
    const result = await model.generateContent(gptQuery);
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
  return (
    <div>
        <img src={BG_URL} alt="" className="relative" />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder=""
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button onClick={(e) => handleOnClick(e)}>search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

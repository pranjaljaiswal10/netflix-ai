import OpenAI from "openai";
import { useState } from "react";
import lang from "../utils/languafeConstant";
import { useDispatch } from "react-redux";
import { addList, addResult } from "../utils/gptSlice";


const GPTMovieSuggestions = () => {
  const [searchTxt,setSearchTxt]=useState("")
  const dispatch=useDispatch()
 async function searchMovies(name){
    const response= await fetch(`1https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`)
    const data=await response.json();
    console.log(data.results)
     return data.results;
  }
  const handleOnClick=async()=>{
    const openai=new OpenAI({
      apiKey:import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser:true
    })
    const gptQuery=`Act as a Movie Recommendation System and suggest some movies for the query ${searchTxt}. Only give me name of 5 movies, comma seperated like the example result given ahead.Example result:Gadar, Sholay, Don, Golmaal`
    
    async function gptResult() { 
     const completion=await openai.chat.completions.create(
      {messages:[{role:'user',content:gptQuery}],
        model:"gpt-3.5-turbo"
    })
    return completion.choices[0].message.content
     }
  const gptresult=gptResult()
  const movie=gptresult.split(", ")
  const promises=movie.map((item)=>searchMovies(item))
  const tmdbMovies=await Promise.all(promises)
    dispatch(addResult(tmdbMovies))
    dispatch(addList(movie))
    }
  return (<div>
    <form onSubmit={(e)=>e.preventDefault()}>
  <input type="text" placeholder={lang.en.gptSearchPlaceholder} value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)} />
  <button onClick={(e)=>handleOnClick(e)}>Search</button>
  </form>
  </div>);
};

export default GPTMovieSuggestions;

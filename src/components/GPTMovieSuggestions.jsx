import OpenAI from "openai";
import { useState } from "react";


const GPTMovieSuggestions = () => {
  const [searchTxt,setSearchTxt]=useState("")
 async function searchMovies(name){
    const response= await fetch(`1https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`)
    const data=await response.json();
    console.log(data.results)
     return data.results;
  }
  const handleOnClick=async()=>{
    const openai=new OpenAI({
      apiKey:import.meta.env.VITE_OPENAI_API_KEY
    })
    const gptQuery=`Act as a Movie Recommendation System and suggest some movies for the query ${searchTxt}. Only give me name of 5 movies, comma seperated like the example result given ahead.Example result:Gadar, Sholay, Don, Golmaal`
    
    async function gptResult() { 
     const completion=await openai.chat.completions.create(
      {messages:[{role:'user',content:gptQuery}],
        model:"gpt-3.5-turbo"
    })
    return completion.choices[0].message.content
     }
  const result=gptResult().split(", ")
  console.log(result)
    }
  return (<>
  <input type="text" placeholder="" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)} />
  <button onClick={(e)=>handleOnClick(e)}>Search</button>
  </>);
};

export default GPTMovieSuggestions;

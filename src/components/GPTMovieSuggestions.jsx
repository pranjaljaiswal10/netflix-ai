import { useState } from "react";
import useGPTSearch from "../utils/hooks/useGPTsearch"

const GPTMovieSuggestions = () => {
  const [searchTxt,setSearchTxt]=useState("")

  
  return (<>
  <input type="text" placeholder="" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)} />
  <button>Search</button>
  </>);
};

export default GPTMovieSuggestions;

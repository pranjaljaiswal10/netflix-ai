

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGeTMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";


const Browse = () => {
  const moviesType=["now_playing","top_rated","popular","upcoming"]
  useGeTMovies(moviesType)
  const gptToggleSearch=useSelector((store)=>store.gpt.showGPT)
 
  return (<>

  
     <MainContainer/>
     <SecondaryContainer/>
  </>);
};

export default Browse;

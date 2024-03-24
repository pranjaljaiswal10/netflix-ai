
import { BG_URL } from "../utils/constant";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGeTMovies from "../utils/hooks/useGetMovies";


const Browse = () => {
  const moviesType=["now_playing","top_rated","popular","upcoming"]
  useGeTMovies(moviesType)
  

 
  return (<>

    <img src={BG_URL} alt="" className="relative" />
     <MainContainer/>
     <SecondaryContainer/>
  </>);
};

export default Browse;

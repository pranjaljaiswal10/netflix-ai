
import { BG_URL } from "../utils/constant";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useNowPlaying from "../utils/hooks/useNowPlaying";
import useTopRated from "../utils/hooks/useTopRated";
import useUpcoming from "../utils/hooks/useUpcoming";

const Browse = () => {
  usePopularMovies()
    useNowPlaying()
    useTopRated()
    useUpcoming()

 
  return (<>

    {/* <img src={BG_URL} alt="" className="relative" /> */}
     <MainContainer/>
     <SecondaryContainer/>
  </>);
};

export default Browse;

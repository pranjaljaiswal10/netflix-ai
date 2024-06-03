import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import AISearchBar from "./AISearchBar";
import AIMovieSuggestions from "./AIMovieSuggestions";
import HomePageShimmer from "./HomePageShimmer";


const Browse = () => {
  useGetMovies();
  const {showSearch,movieResult,titleResult}= useSelector((store) => store.search);
  const movies=useSelector((store)=>store.movies.allMovies)
  
  
  return showSearch ? (
  <>
     <AISearchBar />
    { (movieResult.length!==0||titleResult.length!==0) &&( <AIMovieSuggestions/>)}
     </>
  ) : (
    movies?
   ( <div className="relative bg-opacity-90 bg-black">
    <MainContainer />
      <SecondaryContainer />
   </div>):<HomePageShimmer/>
  );
};

export default Browse;

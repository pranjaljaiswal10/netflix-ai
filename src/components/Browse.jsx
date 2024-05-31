import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import AISearchBar from "./AISearchBar";
import AIMovieSuggestions from "./AIMovieSuggestions";


const Browse = () => {
  useGetMovies();
  const {showSearch}= useSelector((store) => store.search);
  return showSearch ? (
    <>
     <AISearchBar />
     <AIMovieSuggestions/>
     </>
  ) : (
    <>
    <MainContainer />
      <SecondaryContainer />
   </>
  );
};

export default Browse;

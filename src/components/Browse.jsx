import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import AIMovieSuggestions from "./AIMovieSuggestions";
import AISearchBar from "./AISearchBar";

const Browse = () => {
  useGetMovies();
  const {showGPT}= useSelector((store) => store.gpt);
  return showGPT ? (
    <>
     <AISearchBar />
      <AIMovieSuggestions />
     </>
  ) : (
    <>
    <MainContainer />
      <SecondaryContainer />

    </>
  );
};

export default Browse;

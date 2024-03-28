import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import GPTSearchBar from "./GPTSearch";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const Browse = () => {
  useGetMovies();
  const {showGPT}= useSelector((store) => store.gpt);
  return showGPT ? (
    <>
     <GPTSearchBar />
      <GPTMovieSuggestions />
     </>
  ) : (
    <>
    <MainContainer />
      <SecondaryContainer />

    </>
  );
};

export default Browse;

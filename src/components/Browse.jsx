import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGeTMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import GPTSearchBar from "./GPTSearch";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const Browse = () => {
  useGeTMovies();
  const {showGPT}= useSelector((store) => store.gpt);
  console.log(showGPT)
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

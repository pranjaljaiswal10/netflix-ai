import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import AISearchBar from "./AISearchBar";
import AIMovieSuggestions from "./AIMovieSuggestions";
import HomePageShimmer from "./HomePageShimmer";

const Browse = () => {
  useGetMovies();
  const {
    aiMovieResult, 
    titleMovieResult,
    showSearch,
  } = useSelector((store) => store.search);
  const movies = useSelector((store) => store.movies.allMovies);

  return showSearch ? (
    <>
      <AISearchBar />
      {(aiMovieResult || titleMovieResult) && <AIMovieSuggestions />}
    </>
  ) : movies ? (
    <div className="relative bg-opacity-90 bg-black">
      <MainContainer />
      <SecondaryContainer />
    </div>
  ) : (
    <HomePageShimmer />
  );
};

export default Browse;

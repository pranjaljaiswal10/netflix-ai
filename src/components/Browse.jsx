import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useSelector } from "react-redux";
import AIMovieSuggestions from "./AIMovieSuggestions";
import AISearchBar from "./AISearchBar";

const Browse = () => {
  useGetMovies();
  const {showSearch}= useSelector((store) => store.search);
  return showSearch ? (
    <>
     <AISearchBar />
      <AIMovieSuggestions />
     </>
  ) : (
    <div className="relative">
    <MainContainer />
      <SecondaryContainer />

    </div>
  );
};

export default Browse;

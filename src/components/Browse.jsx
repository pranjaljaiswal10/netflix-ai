import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/hooks/useGetMovies";
import { useDispatch, useSelector } from "react-redux";
import AISearchBar from "./AISearchBar";
import HomePageShimmer from "./HomePageShimmer";
import { removeAIResult } from "../utils/searchSlice";
import { useEffect } from "react";

const Browse = () => {
  useGetMovies();
  const { showSearch } = useSelector((store) => store.search);
  const movies = useSelector((store) => store.movies.allMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showSearch) {
      dispatch(removeAIResult());
    }
  }, [showSearch, dispatch]);

  return showSearch ? (
    <>
      <AISearchBar />
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

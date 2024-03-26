import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const GPTMovieSuggestions = () => {
  const { movieList, movieResult } = useSelector((store) => store.gpt);
  return (
    movieList &&
    movieList.map((item, index) => (
      <MovielistData key={item} title={item} moviePoster={movieResult[index]} />
    ))
  );
};

export default GPTMovieSuggestions;

import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const { movieList, movieResult } = useSelector((store) => store.gpt);
  if(!movieList) return null
  return (
    <div className="bg-black absolute top-60">
    { movieList &&
    movieList.map((item, index) => (
      <MovielistData key={item} title={item} moviePoster={movieResult[index]} />
     ))
    }
    </div>
  );
};

export default AIMovieSuggestions;

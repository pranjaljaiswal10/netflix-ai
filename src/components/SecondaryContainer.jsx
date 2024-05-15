import { useSelector } from "react-redux";
import MovielistData from "./Movielist";
import { movieCategory } from "../utils/constant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if(!movies) return null
  return (
    <div className=" pl-10 absolute top-[700px] w-screen overflow-hidden">
      {movieCategory.map((item, index) => (
        <MovielistData key={item} title={item} moviePoster={movies[index]} />
      ))}
    </div>
  );
};

export default SecondaryContainer;

import { useSelector } from "react-redux";
import MovielistData from "./Movielist";
import { movieCategory } from "../utils/constant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if(!movies) return null
  return (
    <div className="bg-gray-950">
    <div className=" lg:px-12 md:px-8 sm:px-6 px-4 relative md:-top-36 z-20  w-screen ">
      {movieCategory.map((item, index) => (
        <MovielistData key={item.category} title={item.category} moviePoster={movies[index]} />
      ))}
    </div>
    </div>
  );
};

export default SecondaryContainer;

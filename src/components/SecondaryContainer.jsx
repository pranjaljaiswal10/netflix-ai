import { useSelector } from "react-redux";
import MovielistData from "./Movielist";
import { movieCategory } from "../utils/constant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if (!movies) return;
  return (
    <div className="bg-black  text-white">
      <div className=" mt-0 md:-mt-48 md:pl-12 relative z-20">
        {movieCategory.map((item, index) => (
          <MovielistData
            key={item.category}
            title={item.category}
            moviePoster={movies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;

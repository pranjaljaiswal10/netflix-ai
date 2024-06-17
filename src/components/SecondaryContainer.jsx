import { useSelector } from "react-redux";
import MovielistData from "./Movielist";
import { movieCategory } from "../utils/constant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if (!movies) return;
  return (
    <div className="bg-black opacity-90 text-white">
      <div className=" lg:px-12 md:px-8 sm:px-6 px-4 lg:-mt-[10%] mt-[0%]  z-20  w-screen ">
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

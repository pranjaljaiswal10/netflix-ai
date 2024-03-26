
import { useSelector } from "react-redux";
import MovielistData from "./Movielist";
import { movieCategory } from "../utils/constant";

const SecondaryContainer = () => {
   const movies=useSelector(store=>store.movies.allMovies)
   console.log(movies) 
  return (
    movieCategory.map((item,index)=><MovielistData key={item} title={item} moviePoster={movies[index]}/>)
  );
};

export default SecondaryContainer;

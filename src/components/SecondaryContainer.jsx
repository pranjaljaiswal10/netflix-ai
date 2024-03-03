
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useNowPlaying from "../utils/hooks/useNowPlaying";
import useTopRated from "../utils/hooks/useTopRated";
import useUpcoming from "../utils/hooks/useUpcoming";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    usePopularMovies()
    useNowPlaying()
    useTopRated()
    useUpcoming()
   const movies=useSelector(store=>store.movies)   
  console.log(movies)  
  return (<>
  <Movielist title="Now Playing" moviesList={movies.nowPlaying} />
  <Movielist title="Popular" moviesList={movies.popularMovies}/>
  <Movielist title="Top Rated" moviesList={movies.topRated}/>
  <Movielist title="Upcoming" moviesList={movies.upcoming}/>
  </>);
};

export default SecondaryContainer;


import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    
   const movies=useSelector(store=>store.movies)  
   console.log(movies)   
  return (<>
  <Movielist title="Now Playing" moviesList={movies.nowPlaying} />
  <Movielist title="Popular" moviesList={movies.popular}/>
  <Movielist title="Top Rated" moviesList={movies.topRated}/>
  <Movielist title="Upcoming" moviesList={movies.upcoming}/>
  </>);
};

export default SecondaryContainer;

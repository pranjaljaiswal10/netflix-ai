
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const {gptList,gptResult}=useSelector((store)=>store.gpt)
   const movies=useSelector(store=>store.movies)  
   console.log(gptList,gptResult)   
  return (<>
  <Movielist title="Now Playing" movies={movies.nowPlaying} />
  <Movielist title="Popular" movies={movies.popular}/>
  <Movielist title="Top Rated" movies={movies.topRated}/>
  <Movielist title="Upcoming" movies={movies.upcoming}/>
  </>);
};

export default SecondaryContainer;

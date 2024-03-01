import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import GPTMovieSuggestions from "./GPTMovieSuggestions";


const MainContainer = () => {
  const  movies=useSelector((store)=>store.movie.popularMovies)
   if(!movies) return;
   console.log(movies[0])
  return (<>
   <VideoTitle/>
   <VideoBackground/>
   {/* <GPTMovieSuggestions/> */}
  </>);
};

export default MainContainer;

import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import GPTMovieSuggestions from "./GPTMovieSuggestions";


const MainContainer = () => {
  const  movies=useSelector((store)=>store.movies.popularMovies)
  
   if(!movies) return;
   const {original_title,overview,id}=movies[0]
  return (<>
   {/* <VideoTitle title={original_title} info={overview}/>
   <VideoBackground movieId={id}/> */}
   <GPTMovieSuggestions/>
  </>);
};

export default MainContainer;

import {  IMG_CDN_URL } from "../utils/constant";
import useMovies from "../utils/hooks/usePopularMovies";

const SecondaryContainer = () => {
    const moviesList=useMovies()
    console.log(moviesList)
  return (<>
  <div className="popular flex flex-wrap space-8 top-64 absolute">
      {
       moviesList&& moviesList.map((item)=>(
       <img src={`${IMG_CDN_URL}${item.poster_path}}`} className="w-36" alt={item.original_title} key={item.id} />))
      }
    </div>
  </>);
};

export default SecondaryContainer;

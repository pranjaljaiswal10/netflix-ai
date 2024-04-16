import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const { movieList, movieResult } = useSelector((store) => store.search);
   const option=useSelector((store)=>store.option.searchType)
  console.log(movieResult)
  if(!movieList) return null
  return (
    <div className="bg-black absolute top-60">
    {option==="AI"?(movieList &&
    movieList.map((item, index) => (
      <MovielistData key={item} title={item} moviePoster={movieResult[index]} />
     ))
  ):(
    <MovielistData  moviePoster={movieResult} />
  
     )
    }
    </div>
    
  );
};

export default AIMovieSuggestions;

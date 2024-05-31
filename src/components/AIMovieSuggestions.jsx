import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const { movieList, movieResult } = useSelector((store) => store.search);
   const option=useSelector((store)=>store.option.searchType)
  console.log(movieResult)
  if(!movieList) return null
  return (
    <div className="bg-black opacity-90 rounded text-white m-8">

    {option==="AI"?(movieList.length>0 &&
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

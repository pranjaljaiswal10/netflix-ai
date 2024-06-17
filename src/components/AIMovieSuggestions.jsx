import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const {
    movieTitle,
    aiMovieResult, 
    titleMovieResult,
  } = useSelector((store) => store.search);
  const option = useSelector((store) => store.option.searchType);
  console.log(movieTitle)
  return (
    
    <div
      className={`bg-black opacity-90 rounded text-white mx-8 ${
      aiMovieResult && titleMovieResult ? "mt-0" : "mt-24"
      }`}
    >
      {option === "AI" ? (
         movieTitle &&
       ( movieTitle.map((item, index) => (
          <MovielistData
            key={item}
            title={item}
            moviePoster={aiMovieResult[index]}
          />
        )))
      ) : (
        <MovielistData title={movieTitle} moviePoster={titleMovieResult} />
      )}
    </div>
  );
};

export default AIMovieSuggestions;

import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const {
    movieTitle,
    aiMovieResult, 
    titleMovieResult,
  } = useSelector((store) => store.search);
  const option = useSelector((store) => store.option.searchType);
  return (
    
    <div
      className={`xl:px-16 md:px-8 sm:px-4 px-1.5 lg:px-12 ${
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

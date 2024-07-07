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
      className={` text-white px-4 py-2 bg-gray-900 bg-opacity-90 ${
      aiMovieResult && titleMovieResult ? "mt-0" : "mt-12"
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

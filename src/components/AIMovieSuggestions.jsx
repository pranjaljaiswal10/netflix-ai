import { useSelector } from "react-redux";
import MovielistData from "./Movielist";

const AIMovieSuggestions = () => {
  const { movieList, movieResult, titleResult } = useSelector(
    (store) => store.search
  );
  const option = useSelector((store) => store.option.searchType);
  console.log(movieResult);
  return (
    <div
      className={`bg-black opacity-90 rounded text-white mx-8 ${
        (movieResult.length == 0&& titleResult.length == 0 )? "mt-0" : "mt-24"
      }`}
    >
      {option === "AI" ? (
        (movieList.length > 0 || titleResult.length !== 0) &&
        movieList.map((item, index) => (
          <MovielistData
            key={item}
            title={item}
            moviePoster={movieResult[index]}
          />
        ))
      ) : (
        <MovielistData moviePoster={titleResult} />
      )}
    </div>
  );
};

export default AIMovieSuggestions;

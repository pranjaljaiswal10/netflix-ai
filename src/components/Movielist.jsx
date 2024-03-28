import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovielistData = ({ title, moviePoster }) => {
  return (
    <div className="py-2">
      <h1 className="text-white">{title.toUpperCase()}</h1>
      <div className="flex overflow-x-scroll ">
        {moviePoster &&
          moviePoster.map((item) => (
         <Link to={`/in/title/${item.id}`} key={item.id}>
            <div className="w-48 pr-4" >
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`}
              alt=""
              
            />
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default MovielistData;

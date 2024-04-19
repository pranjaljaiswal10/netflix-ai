import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovielistData = ({ title, moviePoster }) => {
  
  if(!moviePoster) return null
  return (
    <div className="py-2">
     {title && <h1 className="text-white">{title.toUpperCase()}</h1>}
      <div className="w-screen">
        <div className="flex overflow-x-scroll no-scrollbar" >
        {moviePoster && moviePoster.map((item) => (
         <Link to={`/in/title/${item.id}`} key={item.id}>
            <div className="w-36 mr-5 hover:border-4 hover:border-slate-50" >
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`}
              alt=""
              
            />
            </div>
            </Link>
          ))}
          </div>
      </div>
    </div>
  );
};
export default MovielistData;

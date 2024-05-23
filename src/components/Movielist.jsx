import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";


const MovielistData = ({ title, moviePoster }) => {

  

  if(!moviePoster) return null
  return (
    <div>
     {title && <h1 className="text-lg md:text-2xl text-white font-semibold border-b-2 border-red-500 w-fit mb-4">{title}</h1>}
        <div className="flex overflow-x-scroll py-4" >
        {moviePoster && moviePoster.map((item) => (
         <Link to={`/in/title/${item.id}`} key={item.id}>
            <div className="w-[90px] sm:w-[120px] md:[w-130px] lg:[150px] xl:[170px] mr-5 hover:border-slate-50" >
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`} className="rounded-lg  "
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

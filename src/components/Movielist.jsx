import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { IoImageSharp } from "react-icons/io5";

const MovielistData = ({ title, moviePoster }) => {
 console.log(moviePoster)
  return (
    
    <div>
      {title && (
        <h1 className="text-lg md:text-2xl font-semibold border-b-2 border-red-500 w-fit mb-4 ml-4">
          {title}
        </h1>
      )}
      {moviePoster && (
        <div className="flex overflow-x-scroll p-4">
          {moviePoster.map((item) => (
            <Link to={`/in/title/${item.id}`} key={item.id}>
              <div className="w-[90px] sm:w-[120px] md:[w-130px] lg:[150px] xl:[170px] mx-4 hover:border-slate-50">
                {item?.poster_path !== null ? (
                  <img
                    src={`${IMG_CDN_URL}${item.poster_path}`}
                    className="rounded-lg  "
                    alt=""
                  />
                ) : (
                  <div className="w-[90px] sm:w-[120px] md:[w-130px] lg:[150px] xl:[170px] bg-gray-800 h-44 flex justify-center items-center rounded">
                    <IoImageSharp />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default MovielistData;

import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { IoImageSharp } from "react-icons/io5";

const MovielistData = ({ title, moviePoster }) => {
  return (
    <div className="px-4">
      {title && (
        <h1 className="text-lg md:text-2xl font-semibold border-b-2 border-red-500 w-fit my-6">
          {title}
        </h1>
      )}
      {moviePoster && (
        <div className="flex overflow-x-auto">
          <div className="flex gap-4">
            {moviePoster.map((item) => (
              <div
                className="w-40 md:w-56 hover:border-slate-50 cursor-pointer"
                key={item.id}
              >
                <Link to={`/in/title/${item.id}`}>
                  {item?.poster_path !== null ? (
                    <>
                      <img
                        src={`${IMG_CDN_URL}${item.poster_path}`}
                        className="rounded-lg  "
                        alt={item.title}
                      />
                      <h2>{item.title}</h2>
                    </>
                  ) : (
                    <div className="w-40 md:w-56 bg-gray-800 h-[240px] md:h-[336px] flex justify-center items-center rounded">
                      <IoImageSharp />
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MovielistData;

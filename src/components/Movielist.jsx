import { IMG_CDN_URL } from "../utils/constant";

const MovielistData = ({ title, moviePoster }) => {
    console.log(moviePoster)
  return (
    <>
      <h1>{title}</h1>
      <div className="flex">
        {moviePoster &&
          moviePoster.map((item) => (
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`}
              className="w-24"
              alt=""
              key={item.id}
            />
          ))}
      </div>
    </>
  );
};
export default MovielistData;

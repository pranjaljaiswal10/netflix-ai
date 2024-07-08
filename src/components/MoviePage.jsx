import { Link, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, urls } from "../utils/constant";
import { useEffect, useState } from "react";
import MoviePageShimmer from "./MoviePageShimmer";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [castDetail, setcastDetail] = useState(null);
  const [suggestionList, setSuggestionList] = useState(null);
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await Promise.all(
        urls(movieId).map((item) => fetch(item, API_OPTIONS))
      );
      const data = await Promise.all(response.map((data) => data.json()));
      setMovieDetail(data[0]);
      setcastDetail(data[1].cast.slice(0, 10).map((item) => item.name));
      setSuggestionList(data[2].results);
      const filterData = data[3]?.results.filter((video) =>
        ["Trailer"].includes(video.type)
      );

      const trailer = filterData.length ? filterData : data[3].results[0];
      setVideoList(trailer);
    };
    getData();
  }, [movieId]);

  if (!movieDetail) return <MoviePageShimmer />;
  const {
    overview,
    tagline,
    release_date,
    poster_path,
    title,
    runtime,
    genres,
    production_companies,
  } = movieDetail;
  const genreList = genres.map((item) => item.name);
  const production = production_companies.map((item) => item.name);
  return (
    <div className="bg-black w-full opacity-90 text-white px-16">
      <div className="text-center md:text-start pt-16 items-center  flex md:flex-row flex-col-reverse">
        <div className=" md:pr-16 pr-0 flex flex-col justify-center w-full md:w-8/12">
          <span className="block py-4 font-semibold text-lg">{title}</span>
          <span className="text-slate-400 text-sm">{`${
            release_date.split("-")[0]
          } | ${Math.floor(runtime / 60)}h ${runtime % 60}m | ${
            genreList[0]
          } `}</span>
          <p className="text-center md:text-start py-4 text-sm">{overview}</p>
        </div>
        <div className="md:w-4/12 md:h-[600px]">
          <img
            src={`${IMG_CDN_URL}${poster_path}`}
            alt="poster"
            className="h-[500px] lg:h-full w-full"
          />
        </div>
      </div>
      <p className="text-center my-16 py-4 border-y border-slate-500">
        {tagline}
      </p>
      <div className="py-8">
        <span className="font-semibold text-xl">Videos |</span>
        <span className="text-slate-300 text-sm">{title}</span>
        <div className="flex flex-wrap justify-center md:justify-start">
          {videoList ? (
            videoList.map((item) => (
              <div key={item.id} className="pr-6 rounded">
                <iframe
                  className="w-60 h-60"
                  src={
                    "https://www.youtube.com/embed/" +
                    item?.key +
                    "?&autoplay=0&mute=0"
                  }
                  title="Trailer Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <h2>{item.name}</h2>
              </div>
            ))
          ) : (
            <h1>No Trailer Available</h1>
          )}
        </div>
      </div>
      <div className="py-5">
        <h2 className="font-semibold text-xl">More Details</h2>
        <div className="flex pb-6">
          <div className="w-6/12">
            <span className="block text-gray-400">Cast</span>
            <span className="whitespace-pre-wrap text-sm">
              {castDetail.join("\n")}
            </span>
          </div>
          <div className="w-6/12">
            <span className="block text-gray-400">Genres</span>
            <span className="whitespace-pre-wrap text-sm">
              {genreList.join("\n")}
            </span>
          </div>
        </div>
        <div>
          <span className="block text-gray-400">Production Company</span>
          <span className="text-sm">{production.join(", ")}</span>
        </div>
      </div>
      <div className="py-8">
        <h3 className="font-semibold text-xl mb-4 ">More Like this</h3>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grd-cols-1 justify-center  gap-20">
          {suggestionList.map((item) => (
            <Link to={`/in/title/${item.id}`} key={item.id}>
              <div className="  hover:border-slate-50 hover:border-4  rounded md:w-56 w-40">
                <img
                  src={`${IMG_CDN_URL}${item.poster_path}`}
                  alt="poster-img"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

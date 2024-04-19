import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailer);
  return (
    <div>
      {
      <iframe
        className=" w-screen h-4/5 aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=0&mute=1"
        }
        title="Trailer Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
}
    </div>
  );
};

export default VideoBackground;

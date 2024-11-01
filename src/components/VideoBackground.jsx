import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailer);
  const { isPlaying, isMute } = useSelector((store) => store.play);
  return (
    <div>
        <iframe
          className=" w-screen aspect-square  md:aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=${isPlaying?"1":"0"}&mute=${isMute ? "0" : "1"}`}
          title="Trailer Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  );
};

export default VideoBackground;

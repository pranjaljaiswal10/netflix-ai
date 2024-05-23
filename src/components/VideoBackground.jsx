import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailer);
  const {isPlaying}=useSelector((store)=>store.play)
  
  return (
    <div className="p-0 w-screen overflow-hidden">
      {
      <iframe
        className=" w-screen  aspect-video"
        src={
          `https://www.youtube.com/embed/${trailer?.key}?&autoplay=0&mute=1`
        }
        loading="lazy"
        title="Trailer Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
}
  
    </div>
  );
};

export default VideoBackground;

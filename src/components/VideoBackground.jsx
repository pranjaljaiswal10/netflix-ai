import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";



const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailer);
  const {isPlaying}=useSelector((store)=>store.play)
 
  return (
    <div className="p-0 w-screen">
      {
      <iframe
        className=" w-screen  aspect-video"
        src={
          `https://www.youtube.com/embed/${trailer?.key}?&autoplay=${isPlaying?`1`:`0`}&mute=${isPlaying?`0`:`1`}`
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

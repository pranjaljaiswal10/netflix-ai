import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  const nowPlaying=movies[0]
  if (!nowPlaying) return;
  const { original_title, overview, id } = nowPlaying[0];
  return (
   
    <>
    <VideoTitle title={original_title} info={overview} />
      <VideoBackground movieId={id} />
  </>
  );
};

export default MainContainer;

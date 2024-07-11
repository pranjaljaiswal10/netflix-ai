import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if (!movies) return;
  const nowPlaying = movies[0];
  const { original_title, overview, id } = nowPlaying[3];

  return (
    <>
      <VideoTitle title={original_title} info={overview} id={id} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContainer;

import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constant";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.popular);
  const gptToggleSearch = useSelector((store) => store.gpt.showGPT);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];
  return (gptToggleSearch ? (
    <>
    <img src={BG_URL} alt="" className="relative" />
        <GPTMovieSuggestions />
        </>
  ) : (
    <>
    <VideoTitle title={original_title} info={overview} />
      <VideoBackground movieId={id} />
  </>
  )
  );
};

export default MainContainer;

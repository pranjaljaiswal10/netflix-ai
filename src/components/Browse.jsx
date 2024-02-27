import { BG_URL } from "../utils/constant";
import useMovies from "../utils/hooks/useMovies";
import Header from "./Header";


const Browse = () => {
  const moviesList=useMovies()
 console.log(moviesList)
  return (<>
  <Header/>
    <img src={BG_URL} alt="" />
  </>);
};

export default Browse;

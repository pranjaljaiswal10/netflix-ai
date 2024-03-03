import { useEffect  } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../moviesSlice";


const usePopularMovies = () => {
    const dispatch=useDispatch();
  async function getData(){
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            
            API_OPTIONS
          );
        const data=await response.json()
      dispatch(addPopularMovie(data.results))
        }
    useEffect(()=>{
    getData()
    },[])
}
export default usePopularMovies;

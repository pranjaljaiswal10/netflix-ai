import { useEffect  } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "../moviesSlice";

const useGeTMovies = async(moviesType) => {
    const dispatch=useDispatch();
  
   
    async function getMovies(movie){
      const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movie}?page=1`,
                
                 API_OPTIONS
              );
         const data=await response.json()
         return data.results
    }
   useEffect(()=>{
    async function getData(){
      const promises=moviesType.map((item)=>getMovies(item))
      const movies=await Promise.all(promises)
      console.log(movies)
      dispatch(addTopRated(movies[0]))
      dispatch(addNowPlaying(movies[1]))
      dispatch(addUpcoming(movies[2]))
      dispatch(addPopular(movies[3]))
  }
    getData()
   },[moviesType,dispatch]) 
   

};

export default useGeTMovies;

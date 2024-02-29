import { useEffect, useState,  } from "react";
import { API_OPTIONS } from "../constant";





const useMovies = () => {
  
    const [popularMovies,setPopularMovies]=useState(null)
  async function getData(){
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
          );
        const data=await response.json();
      setPopularMovies(data)
        }
    
    useEffect(()=>{
    getData()
    },[])
    return popularMovies;
}
export default useMovies;

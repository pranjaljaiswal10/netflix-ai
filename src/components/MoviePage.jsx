import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";

const MoviePage = () => {
   const {movieId}=useParams();
   const [movieDetail,setMovieDetail]=useState()
  
  console.log(movieDetail)
  useEffect(()=>{
    async function getMovies(){
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
                
                 API_OPTIONS
              );
         const data=await response.json()
        setMovieDetail(data)
    }
    getMovies()
  },[movieId])
  return (
    <>
    </>
  );
};

export default MoviePage;

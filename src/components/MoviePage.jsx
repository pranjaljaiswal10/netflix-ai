import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MoviePage = () => {
   const {movieId}=useParams();
   const [movieDetail,setMovieDetail]=useState(null)
  
  useEffect(()=>{
    async function getMovies(){
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
                
                 API_OPTIONS
              );
         const data=await response.json()
         console.log(data)
        setMovieDetail(data)
    }
    getMovies()
  },[movieId])
  if(!movieDetail) return
  const {title,overview}=movieDetail;
  
  return (
    <>
    <VideoTitle title={title} info={overview}/>
    <VideoBackground movieId={movieId}/>
    </>
  );
};

export default MoviePage;

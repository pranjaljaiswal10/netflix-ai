import { useEffect } from "react"
import { API_OPTIONS } from "../constant"
import { useDispatch, useSelector } from "react-redux"
import { addTrailer } from "../moviesSlice"

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()
    const {trailer}=useSelector((store)=>store.movies)
    useEffect(()=>{
        async function getData(){
        const response=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        const json=await response.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
    }
    if(!trailer)
     {   
    getData()
     }
    },[dispatch,movieId,trailer])
}
export default useMovieTrailer;
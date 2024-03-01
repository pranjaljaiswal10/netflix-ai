import { useEffect, useState } from "react"
import { API_OPTIONS } from "../constant"

const useMovieTrailer=()=>{
    const [trailer,setTrailer]=useState(null)
    async function getData(){
        const response=await fetch(`https://api.themoviedb.org/3/movie/videos?language=en-US`,API_OPTIONS)
        const data=await response.json();
        setTrailer(data)
    }
    useEffect(()=>{
    getData()
    },[])
    return trailer;
}
export default useMovieTrailer
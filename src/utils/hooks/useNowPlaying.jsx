import { useEffect  } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../moviesSlice";

const useNowPlaying = () => {
    const dispatch=useDispatch();
  async function getData(){
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            
            API_OPTIONS
          );
        const data=await response.json()
      dispatch(addNowPlaying(data.results))
        }
    useEffect(()=>{
    getData()
    },[])
};

export default useNowPlaying;

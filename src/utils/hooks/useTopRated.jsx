import { useEffect  } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addTopRated } from "../moviesSlice";

const useTopRated = () => {
    const dispatch=useDispatch();
    async function getData(){
          const response = await fetch(
              "https://api.themoviedb.org/3/movie/top_rated?page=1",
              
              API_OPTIONS
            );
          const data=await response.json()
        dispatch(addTopRated(data.results))
          }
      useEffect(()=>{
      getData()
      },[])
};

export default useTopRated;

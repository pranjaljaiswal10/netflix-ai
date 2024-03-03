import { useEffect  } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../moviesSlice";

const useUpcoming = () => {
    const dispatch=useDispatch();
  async function getData(){
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            
            API_OPTIONS
          );
        const data=await response.json()
      dispatch(addUpcoming(data.results))
        }
    useEffect(()=>{
    getData()
    },[])
};

export default useUpcoming;

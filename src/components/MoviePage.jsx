import { Link, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, urls } from "../utils/constant";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState()
  const [castDetail, setcastDetail] = useState()
  const [suggestionList, setSuggestionList] = useState()
  const [videoList, setVideoList] = useState()
 
  
  useEffect(()=>{ 
    const getData= async()=>{
    const response=await Promise.all(urls(movieId).map(item=>fetch(item,API_OPTIONS)))
    const data=await Promise.all(response.map(data=>data.json()))
       setMovieDetail(data[0])
       setcastDetail(data[1].cast)
       setSuggestionList(data[2].results)
       const filterData = data[3].results.filter((video) => video.type === ("Trailer" || "Teaser"));
       const trailer = filterData.length ? filterData : data[3].results[0];
       setVideoList(trailer)
       
    }
  getData()
  },[movieId])
  
  if(!movieDetail) return;
  const {overview,release_date,poster_path,title,backdrop_path,runtime,genres}=movieDetail
  console.log(suggestionList)
  return (  
  <>
  <div>
  <img src={`${IMG_CDN_URL}${poster_path}`} alt="" />
  <img src={`${IMG_CDN_URL}${backdrop_path}`} alt="" />
  <h1>{title}</h1>
  <span>{`${release_date.split("-")[0]} | ${Math.floor(runtime/60)}h ${runtime%60}m | ${genres[0].name} `}</span>
  <p>{overview}</p>
  </div>
  <div>
    <span>{`Videos | ${title}`}</span>
     {
      videoList.map((item)=>(
        <iframe
        className="w-1/4"
        key={item.id}
        src={
          "https://www.youtube.com/embed/" +
          item?.key +
          "?&autoplay=0&mute=0"
        }
        title="Trailer Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      ))
     }
  </div>
  <div>
    <h2>More Details</h2>
    {
    castDetail.map((item)=><span key={item.id}>{item.original_name}</span>)
    }
  </div>
  <div>
    <h3>More Like this</h3>
    {suggestionList.map((item)=>(
      <Link to={`/in/title/${item.id}`} key={item.id}>
         <div className="w-48 pr-4" >
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`}
              alt=""
              
            />
            </div>
      </Link>
    ))}
  </div>
  </>)
};

export default MoviePage;

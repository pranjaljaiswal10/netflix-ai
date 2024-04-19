import { Link, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, urls } from "../utils/constant";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null)
  const [castDetail, setcastDetail] = useState(null)
  const [suggestionList, setSuggestionList] = useState(null)
  const [videoList, setVideoList] = useState(null)
 
  
  useEffect(()=>{ 
    const getData= async()=>{
    const response=await Promise.all(urls(movieId).map(item=>fetch(item,API_OPTIONS)))
    const data=await Promise.all(response.map(data=>data.json()))
       setMovieDetail(data[0])
       setcastDetail(data[1].cast.slice(0,10).map((item)=>item.name))
       setSuggestionList(data[2].results)
       const filterData = data[3].results.filter((video) => video.type === ("Trailer" || "Teaser"));
       const trailer = filterData.length ? filterData : data[3].results[0];
       setVideoList(trailer)
    
    }
  getData()
  },[movieId])
  
  if(!movieDetail) return;
  const {overview,release_date,poster_path,title,runtime,genres}=movieDetail
  console.log(videoList)
  return (  
  <div className="bg-slate-950 text-white p-16">
  <div className="flex pt-10 ">
  <div className="pt-12 w-8/12 ">
  <span className="block py-4 font-semibold text-lg">{title}</span>
  <span className="text-slate-400 text-sm">{`${release_date.split("-")[0]} | ${Math.floor(runtime/60)}h ${runtime%60}m | ${genres[0].name} `}</span>
  <p className="py-4 text-sm">{overview}</p>
  </div>
  <div className="w-4/12">
  <img src={`${IMG_CDN_URL}${poster_path}`} className="h-96 pl-32" alt="" />
  </div>
  </div>
  <div className="py-8">
    <span className="font-semibold text-xl">Videos |</span><span className="text-slate-300 text-sm">{title}</span>
    <div className="flex">
     {
      videoList.map((item)=>(
        <div key={item.id} className="pr-6 rounded">
        <iframe
        className="w-60 h-60"
        
        src={
          "https://www.youtube.com/embed/" +
          item?.key +
          "?&autoplay=0&mute=0"
        }
        title="Trailer Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h2>{item.name}</h2>
      </div>
      ))
     }
     </div>
  </div>
  <div className="py-6">
    <h2 className="font-semibold text-xl py-5">More Details</h2>
    <span className="whitespace-pre-wrap text-sm">{castDetail.join("\n")}</span>
    </div>
    <h3  className="font-semibold text-xl pb-4">More Like this</h3>
  <div className="grid grid-cols-5 justify-between  gap-x-24 gap-y-12">
    {suggestionList.map((item)=>(
      <Link to={`/in/title/${item.id}`} key={item.id}>
         <div className="w-48  hover:border-slate-50 hover:border-4 rounded" >
            <img
              src={`${IMG_CDN_URL}${item.poster_path}`}
              alt=""      
            />
            </div>
      </Link>
    ))}
  </div>
  </div>)
};

export default MoviePage;

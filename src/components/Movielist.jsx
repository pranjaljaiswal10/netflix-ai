import { IMG_CDN_URL } from "../utils/constant"

const Movielist = ({title,moviesList})=>{
    return(
   <>
   <h1>{title}</h1>
   <div className="flex">
   {
   moviesList && moviesList.map((item)=>(
            <img src={`${IMG_CDN_URL}${item.poster_path}`} className="w-24" alt="" key={item.id} />
        ))
   }
   </div>
   </>
    )
}
export default Movielist
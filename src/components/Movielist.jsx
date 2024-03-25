import { IMG_CDN_URL } from "../utils/constant"

const Movielist = ({title,movies})=>{
    return(
   <>
   <h1>{title}</h1>
   <div className="flex">
   {
   movies && movies.map((item)=>(
            <img src={`${IMG_CDN_URL}${item.poster_path}`} className="w-24" alt="" key={item.id} />
        ))
   }
   </div>
   </>
    )
}
export default Movielist
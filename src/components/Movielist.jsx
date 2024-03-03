
const Movielist = ({title,movieList})=>{
    if(!movieList) return
    return(
   <>
   <h1>{title}</h1>
   {
   movieList.map((item)=>(
    <div key={item.id}>
    <img src="" alt="" />
    </div>
}
   </>
    )
}
export default Movielist
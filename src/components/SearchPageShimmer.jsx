

const SearchPageShimmer = () => {
  return (
  <div className="bg-black opacity-90 mx-8 mt-24">
    <div className="animate-pulse p-6">
   <div className="h-8 w-40 bg-zinc-900 mb-6"></div> 
   <div className="flex">
   {
    Array(6).fill(" ").map((item,index)=>(
    <div key={index} className="w-36 h-48 bg-zinc-900 mr-4"></div>))
   }
  </div>
   <div className="h-8 w-40 bg-zinc-900 my-6"></div> 
   <div className="flex">
   {
    Array(6).fill(" ").map((item,index)=>(
    <div key={index} className="w-36 h-48 bg-zinc-900 mr-4"></div>))
   }
  </div>
  </div>
  </div>);
};

export default SearchPageShimmer;

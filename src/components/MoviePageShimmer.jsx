
const MoviePageShimmer = () => {
  return (
  <div className=" px-16 h-full bg-black opacity-80">
    <div className="pt-16 items-center animate-pulse flex md:flex-row flex-col-reverse">
      <div className="pr-16 flex flex-col justify-center w-full md:w-8/12 space-y-2">
        <div className="bg-zinc-900 h-8 w-80"></div>
        <div className="bg-zinc-900 h-6 w-56"></div>
        <div className="bg-zinc-900 h-4  w-full "></div>
        <div className="bg-zinc-900 h-4 w-4/5"></div>
        <div className="bg-zinc-900 h-4 w-3/4"></div>
        <div className="bg-zinc-900 h-4 w-2/3"></div>
      </div>
      <div className="md:w-4/12 animate-pulse h-[600px]">
        <div className="w-full h-full bg-zinc-900 rounded"></div>
      </div>
    </div>
    <div className="flex flex-col  items-center">
    <div className="text-center bg-zinc-900 h-4 w-1/2 my-16"></div>
    <div></div>
    </div>
  </div>
  );
};

export default MoviePageShimmer;

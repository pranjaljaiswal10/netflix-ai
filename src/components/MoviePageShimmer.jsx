const MoviePageShimmer = () => {
  return (
    <div className=" px-16 h-screen  bg-black opacity-80">
      <div className="pt-16 items-center animate-pulse flex md:flex-row flex-col-reverse">
        <div className="md:pr-16 pr-0 flex flex-col items-start w-full md:w-8/12 space-y-4 pt-6 md:pt-0">
          <div className="bg-zinc-900 h-8 w-80"></div>
          <div className="bg-zinc-900 h-6 w-56"></div>
          <div className="bg-zinc-900 h-4  w-full "></div>
          <div className="bg-zinc-900 h-4 w-4/5"></div>
          <div className="bg-zinc-900 h-4 w-3/4"></div>
          <div className="bg-zinc-900 h-4 w-2/3"></div>
        </div>
        <div className="md:w-4/12  animate-pulse h-[500px]">
          <div className="md:w-full w-[400px] h-full bg-zinc-900 rounded"></div>
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

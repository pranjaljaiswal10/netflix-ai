const HomePageShimmer = () => {
  return (
    <div className=" bg-black h-full opacity-80 ">
      <div className="px-12 animate-pulse">
        <div className=" pt-[18%] w-1/2">
          <div className="h-24 w-full bg-zinc-900"></div>
          <div className="h-4 w-4/5 bg-zinc-900 my-2"></div>
          <div className="h-4 w-3/4 bg-zinc-900"></div>
          <div className="h-4 w-2/3 bg-zinc-900 my-2"></div>
          <div className="flex">
            <span className=" block h-8 w-1/4 bg-zinc-900"></span>
            <span className="block h-8 w-1/4 bg-zinc-900 ml-4"></span>
          </div>
        </div>
        <div className="mt-32 h-8 w-40 bg-zinc-900"></div>
        <div className="flex flex-wrap mt-12 ml-0 gap-8">
          {Array(9)
            .fill(" ")
            .map((item, index) => (
              <div key={index}>
                <div className=" rounded w-40 h-60 md:w-56 md:h-80 bg-zinc-900 "></div>
                <div className="bg-zinc-900 rounded h-4 w-36 mt-2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageShimmer;

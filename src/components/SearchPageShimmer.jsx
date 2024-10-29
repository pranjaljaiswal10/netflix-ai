const SearchPageShimmer = () => {
  return (
    <div className="bg-gray-900 opacity-90 mt-24">
      <div className=" p-6">
        <div className="h-8 w-40 bg-gray-100 mb-6"></div>
        <div className="grid grid-cols-3 gap 3 overflow-x-auto">
          {Array(6)
            .fill(" ")
            .map((item, index) => (
              <div key={index} className="w-40 md:w-56 h-48  md:h-80 bg-gray-200 m-6"></div>
            ))}
        </div>
        <div className="h-8 w-40 bg-zinc-900 my-6 overflow-x-auto"></div>
        <div className="grid grid-cols-3 gap-3">
          {Array(6)
            .fill(" ")
            .map((item, index) => (
              <div key={index} className="w-40 md:w-56 h-48  md:h-80 bg-black"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPageShimmer;

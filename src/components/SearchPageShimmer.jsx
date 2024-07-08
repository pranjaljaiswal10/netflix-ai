const SearchPageShimmer = () => {
  return (
    <div className="bg-gray-900 opacity-90 mt-24">
      <div className="animate-pulse p-6">
        <div className="h-8 w-40 bg-black mb-6"></div>
        <div className="flex">
          {Array(6)
            .fill(" ")
            .map((item, index) => (
              <div key={index} className="w-40 md:w-56 h-60  md:h-80 bg-black mr-4"></div>
            ))}
        </div>
        <div className="h-8 w-40 bg-zinc-900 my-6"></div>
        <div className="flex">
          {Array(6)
            .fill(" ")
            .map((item, index) => (
              <div key={index} className="w-40 md:w-56 h-60  md:h-80 bg-black mr-4"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPageShimmer;

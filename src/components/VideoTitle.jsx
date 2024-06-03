import { FaPlay } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleMute, togglePlay } from "../utils/playSlice";

const VideoTitle = ({ title, info, id }) => {
  const dispatch = useDispatch();
  const { isMute} = useSelector((store) => store.play);
  return (
    <div className="w-screen aspect-video lg:pt-[15%] md:pt-[15%] sm-[10%] px-6 md:px-12 absolute top-10 text-white  from-black ">
      <div className="w-1/2 mb-8">
        <h1 className="text-base sm:text-3xl md:text-4xl xl:text-5xl font-bold">
          {title}
        </h1>
        <p className="py-6 text-sm md:text-base line-clamp-2 xl:line-clamp-3">
          {info}
        </p>
      </div>
      <div className=" flex">
        <div className="w-6/12 flex">
          <button
            onClick={() => {
              dispatch(togglePlay());
            }}
            className="bg-white hover:bg-opacity-80 text-black   rounded px-2 md:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl  hover:opacity-80 "
          >
            <FaPlay className="inline font-semibold" /> Play
          </button>
          <Link to={`/in/title/${id}`}>
            <button className=" ml-4 bg-gray-500 hover:bg-opacity-80 text-white px-2 md:px-4 py-1 sm:py-2  text-sm sm:text-base md:text-lg lg:text-xl  rounded">
              <GrCircleInformation className="inline font-semibold" /> More Info
            </button>
          </Link>
        </div>
        <div className="w-6/12 flex justify-end">
          <button
            onClick={() => {
              dispatch(toggleMute());
            }}
            className="w-9 h-9 rounded-full border-gray-500/50 hover: border-2 flex justify-center items-center "
          >
            {isMute ? (
              <VscUnmute className="font-bold text-lg" />
            ) : (
              <VscMute className="font-bold text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

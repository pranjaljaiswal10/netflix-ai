import { FaPause, FaPlay } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleMute, togglePlay } from "../utils/playSlice";

const VideoTitle = ({ title, info, id }) => {
  const dispatch = useDispatch();
  const { isMute, isPlaying } = useSelector((store) => store.play);
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-24 absolute top-10 text-white  from-black ">
      <div className="w-1/2 mb-8">
        <h1 className="font-semibold md:font-bold py-4 md:py-0 text-2xl md:text-5xl">
          {title}
        </h1>
        <p className="py-6 hidden lg:block  text-base line-clamp-2 xl:line-clamp-3 md:text-lg">
          {info}
        </p>
      </div>
      <div className=" flex">
        <div className="w-6/12 flex">
          {isPlaying ? (
            <button
              onClick={() => {
                dispatch(togglePlay());
              }}
              className="bg-white hover:bg-opacity-80 text-black   rounded px-2 md:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl  hover:opacity-80 "
            >
              <FaPause className="inline font-semibold" /> Pause
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(togglePlay());
              }}
              className="bg-white hover:bg-opacity-80 text-black w-36 md:w-fit   rounded px-4 md:px-12 py-1 sm:py-2  md:text-xl  hover:opacity-80 flex gap-2 items-center"
            >
              <FaPlay /> Replay
            </button>
          )}
          <Link to={`/in/title/${id}`}>
            <button className=" ml-4 bg-gray-500 hover:bg-opacity-80 text-white px-2 w-36 md:w-fit md:px-8 py-1 sm:py-2  md:text-xl flex gap-4 items-center rounded">
              <GrCircleInformation /> More Info
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

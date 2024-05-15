import { FaPlay } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, info,id }) => {
  
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute text-white  from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="  py-6 w-2/5">{info}</p>
      <div className=" flex">
        <button className="bg-white text-black text-xl rounded px-6 py-2 hover:opacity-80 ">
        <FaPlay className="inline font-semibold"/> Play
        </button>
        <Link to={`/in/title/${id}`}>
        <button className=" mx-2 bg-gray-500 text-white py-2 px-6 text-xl  rounded">
          <GrCircleInformation className="inline font-semibold"/> More Info
        </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;

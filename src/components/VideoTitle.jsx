import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-80 px-12 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold text-white"> {title}</h1>
      <p className="w-1/2 py-6 text-white">{overview}</p>
      <div>
        <button className="px-8 py-2 bg-white text-black rounded-lg hover:opacity-80 cursor-pointer ">
          ▶ Play
        </button>
        <button className="py-2 px-7 mx-3 bg-gray-500/50 rounded-lg text-white cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;

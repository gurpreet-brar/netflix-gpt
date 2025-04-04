import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[22%] md:pt-[15%] xl:pt-[30%] px-12 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-md pb-2 sm:pb-4 md:pb-0 md:text-3xl font-bold text-white">
        {" "}
        {title}
      </h1>
      <p className="md:inline-block hidden w-1/2 py-6 text-white">{overview}</p>
      <div>
        <button className="text-sm sm:text-md px-4 py-1 sm:px-8 sm:py-2 bg-white text-black rounded-lg hover:opacity-80 cursor-pointer ">
          ▶ Play
        </button>
        <button className="px-4 py-1 sm:py-2 sm:px-7 mx-3 bg-gray-500/50 rounded-lg text-white cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;

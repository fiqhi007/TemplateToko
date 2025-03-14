import React from "react";
import Carouser from "./Carouser";

const Hero = () => {
  return (
    <>
      <div className="div w-full  bg-gray-400 flex flex-col justify-center items-top  h-screen">
        <div className=" m-7 bg-amber-200 w-auto h-96 flex justify-center items-center border-2 border-black rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] ">
        <h1 className="text-4xl text-white">Welcome to Tailwind CSS</h1>
        </div>
        <Carouser />
      </div>
    </>
  );
};

export default Hero;

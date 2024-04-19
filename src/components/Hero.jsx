import React from "react";
import Rectangle2 from "../assets/Rectangle2.png";

export const Hero = () => {
  return (
    <>
      <div className="w-full  relative">
        <div className="w-full h-full">
          <div className="bg-black w-full h-full absolute top-0 left-0 bg-opacity-50"></div>
          <img src={Rectangle2} className="w-full" alt="" />
        </div>
        <div className="text-white absolute bottom-[15%] left-[10%]">
          <h1 className="text-4xl py-1 font-semibold">Computer Engineering</h1>
          <h3 className="text-xl">142,765 Computer Engineers follow this</h3>
        </div>
      </div>
    </>
  );
};

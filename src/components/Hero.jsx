import React from "react";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle22 from "../assets/Rectangle22.png";

export const Hero = () => {
  return (
    <>
      <div className="w-full  relative">
        <div className="w-full h-full">
          <div className="bg-black w-full h-full absolute top-0 left-0 bg-opacity-50"></div>
          <img src={Rectangle2} className="w-full max-sm:hidden" alt="" />
          <img src={Rectangle22} className="w-full sm:hidden" alt="" />
          <div>
            <button className="text-white border-2 border-white rounded-lg absolute top-[5%] right-[5%] py-1 px-2 max-sm:block hidden">
              Join Group
            </button>
          </div>
        </div>
        <div className="text-white absolute bottom-[15%] left-[10%] max-sm:left-[4%]">
          <h1 className="text-4xl py-1 font-semibold max-sm:text-xl">
            Computer Engineering
          </h1>
          <h3 className="text-xl max-sm:text-xs">
            142,765 Computer Engineers follow this
          </h3>
        </div>
      </div>
    </>
  );
};

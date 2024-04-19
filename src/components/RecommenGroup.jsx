import React from "react";
import follow1 from "../assets/follow1.png";
import follow2 from "../assets/follow2.png";
import follow3 from "../assets/follow3.png";
import follow4 from "../assets/follow4.png";

export const RecommenGroup = () => {
  return (
    <div className="py-4 mx-8">
      <p className="flex font-semibold">
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
          />
        </svg>
        RECOMMENDED GROUPS
      </p>
      <div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <img src={follow1} className="w-8 h-8" alt="" />
            <p className="font-semibold px-2">Leisure</p>
          </div>
          <button className="bg-gray-200 rounded-2xl px-4 py-1 text-sm font-semibold">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <img src={follow2} className="w-8 h-8" alt="" />
            <p className="font-semibold px-2">Activism</p>
          </div>
          <button className="bg-gray-200 rounded-2xl px-4 py-1 text-sm font-semibold">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <img src={follow3} className="w-8 h-8" alt="" />
            <p className="font-semibold px-2">MBA</p>
          </div>
          <button className="bg-gray-200 rounded-2xl px-4 py-1 text-sm font-semibold">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <img src={follow4} className="w-8 h-8" alt="" />
            <p className="font-semibold px-2">Philosophy</p>
          </div>
          <button className="bg-gray-200 rounded-2xl px-4 py-1 text-sm font-semibold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

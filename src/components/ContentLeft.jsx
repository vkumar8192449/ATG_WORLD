import React from "react";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import "./ContentLeft.css";

export const ContentLeft = () => {
  return (
    <div className="min-w-[60%] max-sm:w-[90%] m-auto">
      <div className="border-2 rounded-lg mb-4">
        <img src={post1} className="w-full" alt="" />
        <div className="py-4 px-8 temp">
          <p className="pb-2">✍️ Article</p>
          <div className="flex justify-between items-center cont-title">
            <p className="md:text-[1.35rem] font-semibold w-[60%] pb-1 sm:text-lg">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            {/*  */}
          </div>
          <p className="text-gray-600 text-[1.05rem] sm:text-xs para">
            I've worked in UX for the better part of a decade. From now on, I
            plan to rei...
          </p>
          <div className="flex justify-between pt-4 items-center cont-profile">
            <div className="flex items-center">
              <img src={profile1} alt="" />
              <p className="font-bold pl-4">Sarthak Kamra</p>
            </div>
            <div className="flex">
              <p className="flex items-center pr-8">
                <svg
                  className="w-6 h-6 text-gray-800 pr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                1.4k views
              </p>
              <button className="bg-gray-300 p-1 rounded-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-md mb-4">
        <img src={post2} className="w-full" alt="" />
        <div className="py-4 px-8 temp">
          <p className="pb-2">🔬 Education</p>
          <div className="flex justify-between items-center cont-title">
            <p className="md:text-[1.35rem] font-semibold w-[70%] pb-1 sm:text-lg">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>
            {/*  */}
          </div>
          <p className="text-gray-600 text-[1.05rem] sm:text-xs para">
            I've worked in UX for the better part of a decade. From now on, I
            plan to rei...
          </p>
          <div className="flex justify-between pt-4 items-center cont-profile">
            <div className="flex items-center">
              <img src={profile2} alt="" />
              <p className="font-bold pl-4">Sarah West</p>
            </div>
            <div className="flex">
              <p className="flex items-center pr-8">
                <svg
                  className="w-6 h-6 text-gray-800 pr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                1.4k views
              </p>
              <button className="bg-gray-300 p-1 rounded-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-md mb-4">
        <img src={post3} className="w-full" alt="" />
        <div className="py-4 px-8 temp">
          <p className="pb-2">📅 Meetup</p>
          <div className="flex justify-between items-center cont-title">
            <p className="md:text-[1.35rem] font-semibold w-[70%] pb-1 sm:text-lg">
              Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            {/*  */}
          </div>
          <div className="flex pb-4 pt-1">
            <p className="text-gray-600 flex">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              Fri, 12 Oct, 2018
            </p>
            <p className="text-gray-600 flex ml-8">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Ahmedabad, India
            </p>
          </div>
          <button className="text-red-400 font-semibold w-full border-2 p-2 rounded-lg">
            Visit Website
          </button>
          <div className="flex justify-between pt-4 items-center cont-profile">
            <div className="flex items-center">
              <img src={profile3} alt="" />
              <p className="font-bold pl-4">Ronal Jones</p>
            </div>
            <div className="flex">
              <p className="flex items-center pr-8">
                <svg
                  className="w-6 h-6 text-gray-800 pr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                1.4k views
              </p>
              <button className="bg-gray-300 p-1 rounded-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-md mb-4">
        <div className="py-4 px-8 temp">
          <p className="pb-2">💼 Job</p>
          <div className="flex justify-between items-center cont-title">
            <p className="text-[1.35rem] font-semibold w-[70%] pb-1">
              Software Developer
            </p>
            {/*  */}
          </div>
          <div className="flex pb-4 pt-1">
            <p className="text-gray-600 flex">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              Innovaccer Analytics Private Ltd.
            </p>
            <p className="text-gray-600 flex ml-8">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Noida, India
            </p>
          </div>
          <button className="text-green-500 font-semibold w-full border-2 p-2 rounded-lg">
            Apply on Timesjobs
          </button>
          <div className="flex justify-between pt-4 items-center cont-profile">
            <div className="flex items-center">
              <img src={profile4} alt="" />
              <p className="font-bold pl-4">Joseph Gray</p>
            </div>
            <div className="flex">
              <p className="flex items-center pr-8">
                <svg
                  className="w-6 h-6 text-gray-800 pr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                1.4k views
              </p>
              <button className="bg-gray-300 p-1 rounded-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

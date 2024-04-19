import React from "react";
import { RecommenGroup } from "./RecommenGroup.jsx";

export const ContentRight = (prop) => {
  return (
    <div className="min-w-[250px] max-w-[350px] max-md:hidden">
      <form className="flex items-center max-w-lg mx-8">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          </div>
          <input
            type="text"
            id="voice-search"
            className="font-semibold border-b-2 border-b-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
            placeholder="Search Mockups, Logos, Design Templates..."
            required
            value="Noida, India"
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
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
                d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
              />
            </svg>
          </button>
        </div>
      </form>
      <p className="flex text-gray-500 text-sm p-8">
        <div className="border-2 rounded-full m-0 p-0 h-5">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
        </div>{" "}
        Your location will help us serve better and extend a personalised
        experience.
      </p>
      {prop.islogin ? <RecommenGroup /> : <></>}
    </div>
  );
};

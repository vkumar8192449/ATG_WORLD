import React from "react";
import whole from "../assets/whole.png";
import photo from "../assets/profile4.png";
import "./Header.css";

export const Header = (prop) => {
  return (
    <>
      <div
        id="header-main"
        className="h-16 w-full flex justify-between items-center border-2 px-20 "
      >
        <div className="flex justify-center items-center ">
          <img src={whole} id="logo-img" className="w-full " alt="" />
        </div>

        <div className="max-sm:hidden" id="search-bar">
          <form className="max-w-md mx-auto ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="rounded-2xl block font-semibold w-[350px] p-2 ps-10 text-sm text-gray-950 border border-gray-300 bg-gray-50"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </form>
        </div>

        {prop.islogin ? (
          <div className=" flex items-center cursor-pointer">
            <img src={photo} className="w-8 h-8" alt="" />
            <p className="font-semibold px-2">Vinay kumar</p>
            <svg
              className="w-4 h-4 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div
            id="create-acc"
            className="font-semibold cursor-pointer"
            onClick={() => {
              prop.setlogin(1);
            }}
          >
            Create account. <span className="text-sky-400">It's free!</span>
          </div>
        )}
      </div>
    </>
  );
};

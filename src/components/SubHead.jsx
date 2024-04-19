import React from "react";
import "./SubHead.css";

export const SubHead = (prop) => {
  return (
    <div
      id="sub-main"
      className="w-[80%] m-auto flex justify-center items-center"
    >
      <div
        id="sub-scroll"
        className="w-full flex text-sm justify-between font-medium text-center text-gray-500 border-b border-gray-200"
      >
        <ul id="sub-ul" className="flex -mb-px">
          <li className="me-2 w-max">
            <a
              href="#"
              className="inline-block p-4 text-black border-b-2 border-black rounded-t-lg active"
              aria-current="page"
            >
              All Posts (32)
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              Article
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              Event
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              Education
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              Job
            </a>
          </li>
        </ul>
        <div className="flex w-fit h-fit py-2 max-sm:hidden">
          <button
            id="sub-btn1"
            type="button"
            className="flex text-black bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm lg:px-5 py-2.5 me-2 mb-2 sm:px-2.5 max-sm:text-xs"
          >
            Write a Post{" "}
            <svg
              className="w-5 h-5 text-gray-700"
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
          </button>
          {prop.islogin ? (
            <button
              id="sub-btn2"
              type="button"
              className="flex text-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm lg:px-5 lg:py-2.5 sm:py-1 me-2 mb-2 border-2 border-gray-500 sm:px-2.5"
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
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
              Leave Group
            </button>
          ) : (
            <button
              id="sub-btn3"
              type="button"
              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm lg:px-5 py-2.5 me-2 mb-2 md:px-2.5"
            >
              <svg
                className="w-6 h-6 text-gray-800 fill-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
              Join Group
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

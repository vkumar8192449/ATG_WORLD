import React from "react";
import fb from "../assets/fb.png";
import google from "../assets/google.png";

export const LogSignLeft = (prop) => {
  return (
    <div className="w-[55%] px-8">
      <p className="text-2xl font-semibold pb-4">Sign In</p>
      <input
        className="bg-[#f7f8fa] rounded px-2 py-2 border text-gray-800 w-full"
        type="email"
        placeholder="Email"
        value="vkumar8192449@gmail.com"
      />
      <input
        className="bg-[#f7f8fa] rounded px-2 py-2 border text-gray-800 w-full"
        type="password"
        placeholder="Password"
        value="12345678"
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-8 w-full rounded-2xl my-4"
        onClick={() => {
          prop.setislogin(true);
          prop.setlogin(0);
        }}
      >
        Sign In
      </button>
      <button
        type="button"
        className=" flex  items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 w-full rounded-lg"
      >
        <img src={fb} alt="" />
        &nbsp; Sign in with Facebook
      </button>
      <button
        type="button"
        className=" flex  items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 w-full rounded-lg"
      >
        <img src={google} alt="" />
        &nbsp; Sign in with Google
      </button>
    </div>
  );
};

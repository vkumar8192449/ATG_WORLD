import React from "react";
import { SignLog } from "./SignLog.jsx";

export const Model = (prop) => {
  return (
    <div
      className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"
      onClick={() => {
        prop.setlogin(0);
      }}
    ></div>
  );
};

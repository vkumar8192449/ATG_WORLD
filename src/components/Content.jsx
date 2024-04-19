import React from "react";
import { ContentLeft } from "./ContentLeft.jsx";
import { ContentRight } from "./ContentRight.jsx";

export const Content = (prop) => {
  return (
    <div className="w-[80%] mx-auto  flex justify-between max-sm:w-full    ">
      <ContentLeft />
      <ContentRight islogin={prop.islogin} />
    </div>
  );
};

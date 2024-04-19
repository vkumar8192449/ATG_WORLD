import React from "react";
import { ContentLeft } from "./ContentLeft.jsx";
import { ContentRight } from "./ContentRight.jsx";

export const Content = (prop) => {
  return (
    <div className="w-[80%] m-auto flex justify-between">
      <ContentLeft />
      <ContentRight islogin={prop.islogin} />
    </div>
  );
};

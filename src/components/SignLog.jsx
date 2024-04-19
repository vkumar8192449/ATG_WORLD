import React from "react";
import { SignLogLeft } from "./SignLogLeft.jsx";
import { SignLogRight } from "./SignLogRight.jsx";

export const SignLog = (prop) => {
  return (
    <div className="border-2 w-[55%] m-auto rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-20">
      <p className="text-center text-green-600 bg-green-300 font-semibold py-2">
        Let's learn, share & inspire each Other with our passion for computer
        engineering. Sign up now 🤘
      </p>
      <br />
      <div className="flex p-4">
        <SignLogLeft />
        <SignLogRight
          login={prop.login}
          setlogin={prop.setlogin}
          text1="Already have an account?"
          text2="Sign In"
        />
      </div>
    </div>
  );
};

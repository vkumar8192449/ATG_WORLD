import React from "react";
import logsign from "../assets/logsign.png";

export const SignLogRight = (props) => {
  return (
    <div className="w-[45%] text-right">
      <div
        className="font-semibold cursor-pointer"
        onClick={() => {
          if (props.login === 1) {
            props.setlogin(2);
          } else {
            props.setlogin(1);
          }
        }}
      >
        {props.text1} <span className="text-sky-400">{props.text2}</span>
      </div>
      <img src={logsign} alt="" />
      <p className="text-[0.7rem]">
        By signing up, you agree to our Terms & conditions, Privacy policy
      </p>
    </div>
  );
};

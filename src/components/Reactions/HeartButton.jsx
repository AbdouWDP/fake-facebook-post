import React from "react";
import love from "../../assets/love.svg";

function HeartButton({ props }) {
  return (
    <div
      className={`${
        props
          ? "w-10 h-10 cursor-pointer hover:scale-110 duration-300"
          : "w-4 h-4"
      }`}
    >
      <img src={love} alt="" className={`${props && "w-full h-full"}`} />
    </div>
  );
}

export default HeartButton;

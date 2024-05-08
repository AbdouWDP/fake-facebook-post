import React from "react";
import wow from "../../assets/wow.svg";

function WowButton({ props }) {
  return (
    <div
      className={`${
        props
          ? "w-10 h-10 cursor-pointer hover:scale-110 duration-300"
          : "w-4 h-4"
      }`}
    >
      <img src={wow} alt="" className={`${props && "w-full h-full"}`} />
    </div>
  );
}

export default WowButton;

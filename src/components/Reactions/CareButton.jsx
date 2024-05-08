import React from "react";
import care from "../../assets/care.svg";

function CareButton({ props }) {
  return (
    <div
      className={`${
        props
          ? "w-10 h-10 cursor-pointer hover:scale-110 duration-300"
          : "w-4 h-4"
      }`}
    >
      <img src={care} alt="" className={`${props && "w-full h-full"}`} />
    </div>
  );
}

export default CareButton;

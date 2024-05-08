import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";

function ReactButtons() {
  return (
    <div className="react-buttons mt-1 m-auto">
      <nav>
        <ol className="">
          <li>
            <button className="flex gap-1 items-center justify-center text-gray font-semibold w-full h-10 rounded-md">
              <span className="text-xl">
                <FiThumbsUp />
              </span>
              <span>Like</span>
            </button>
          </li>
          <li>
            <button className="comment-button flex gap-1 items-center justify-center text-gray font-semibold w-full h-10 rounded-md">
              <span className="text-2xl">
                <IoChatbubbleOutline />
              </span>
              <span>Comment</span>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center justify-center text-gray font-semibold w-full h-10 rounded-md">
              <span className="text-2xl">
                <IoArrowRedoOutline />
              </span>
              <span>Share</span>
            </button>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default ReactButtons;

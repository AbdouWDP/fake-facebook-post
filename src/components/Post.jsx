import React, { useRef } from "react";
import { saveAs } from "file-saver";
import UpperPost from "./UpperPost";
import domtoimage from "dom-to-image";
import { Tooltip } from "@mui/material";
import ReactButtons from "./ReactButtons";
import { FiDownload } from "react-icons/fi";
import LikeButton from "./Reactions/LikeButton";
import HeartButton from "./Reactions/HeartButton";
import HahaButton from "./Reactions/HahaButton";

function Post({ width, check, postForm }) {
  const post = useRef(null);

  function screenshot() {
    domtoimage
      .toBlob(post.current)
      .then((blob) => {
        saveAs(blob, "my-post.png");
      })
      .catch((err) => alert("Something went wrong, please try again later!"));
  }

  const numbersConverter = (num) => {
    if (num >= 1000 && num < 10000) {
      return num[0] + "," + num[1] + "k";
    } else if (num >= 10000 && num < 100_000) {
      return num[0] + num[1] + "k";
    } else if (num >= 100_000 && num < 1_000_000) {
      return num[0] + num[1] + num[3] + "k";
    } else if (num >= 1_000_000 && num < 10_000_000) {
      return num[0] + "m";
    }
    return num;
  };

  return (
    <>
      <section
        className={`post ${
          width ? "w-11/12" : "w-1/2"
        } h-fit bg-post text-white rounded-lg flex justify-center pt-2 pb-1 max-md:w-nine-five max-lg:w-3/4`}
        ref={post}
      >
        <article className="w-nine-five">
          <UpperPost check={check} postForm={postForm} />
          <div className="post-content mt-1">
            <p> {postForm.content === "" ? "Welcome" : postForm.content} </p>
          </div>
          <section className="bottom-post">
            <div className="s flex justify-between items-center pb-2 pt-1">
              <div className="post-reactions flex items-center gap-1 cursor-pointer text-gray">
                <div className="flex items-center">
                  {postForm.reactions > 0 ? (
                    <>
                      {postForm.reactions[0]}
                      {postForm.reactions[1]}
                      {postForm.reactions[2]}
                    </>
                  ) : (
                    <>
                      <LikeButton props={false} />
                      <HeartButton props={false} />
                      <HahaButton props={false} />
                    </>
                  )}
                </div>
                <div className="hover:underline select-none">
                  <p>
                    {postForm.likes === ""
                      ? "100"
                      : numbersConverter(postForm.likes)}
                  </p>
                </div>
              </div>
              <div className="text-gray hover:underline cursor-pointer select-none">
                <p>
                  {postForm.comments === ""
                    ? "100"
                    : numbersConverter(postForm.comments)}{" "}
                  comments
                </p>
              </div>
            </div>
            <ReactButtons />
          </section>
        </article>
      </section>
      <Tooltip title="Download" followCursor>
        <button
          className={`download-post-button bg-post ${
            width ? "w-11/12" : "w-1/2"
          } h-16 rounded-lg text-gray text-4xl flex justify-center items-center max-md:w-nine-five max-lg:w-3/4`}
          onClick={screenshot}
        >
          <span>
            <FiDownload />
          </span>
        </button>
      </Tooltip>
    </>
  );
}

export default Post;

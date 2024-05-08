import React, { useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { IoReaderOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiImage } from "react-icons/fi";

function DashbordForm({ check, setCheck, postForm, setPostForm }) {
  const username = useRef(null);
  const time = useRef(null);
  const content = useRef(null);
  const likes = useRef(null);
  const comments = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    setPostForm({
      ...postForm,
      username: username.current.value,
      time: time.current.value,
      content: content.current.value,
      likes: likes.current.value,
      comments: comments.current.value,
    });
    function cleanValue(el) {
      el.current.value = "";
    }
    cleanValue(username);
    cleanValue(time);
    cleanValue(content);
    cleanValue(likes);
    cleanValue(comments);
  };

  return (
    <form
      className="dashbord-form w-nine-five h-nine-five flex flex-col gap-4"
      onSubmit={(e) => formHandler(e)}
    >
      <div className="post-username relative">
        <input type="text" placeholder="Username" ref={username} />
        <span className="absolute top-1/2 right-4 text-gray text-xl">
          <FaRegUser />
        </span>
      </div>

      {/* ============================================================ */}

      <div className="post-profile-picture relative">
        <div className="absolute top-0 text-gray font-semibold w-full h-12 flex gap-3 items-center justify-center rounded-lg cursor-pointer">
          <p>Upload Profile Picture</p>
          <div className="text-xl">
            <FiImage />
          </div>
        </div>
        <input
          type="file"
          placeholder="Username"
          className="w-full opacity-0 cursor-pointer z-50"
          accept=".jpeg, .png, .jpg"
          onChange={(e) =>
            setPostForm({ ...postForm, profile_picture: e.target.files[0] })
          }
        />
      </div>

      {/* ============================================================ */}

      <div
        className="verified-icon-checkbox text-gray flex gap-2 items-center cursor-pointer"
        onClick={() => setCheck(!check)}
      >
        <input type="checkbox" checked={check} />
        <p className="select-none">Verified icon</p>
      </div>

      {/* ============================================================ */}

      <div className="post-time relative">
        <input
          type="text"
          placeholder="Time (Choose your time and then choose unit like: h, min and sec)"
          ref={time}
        />
        <span className="absolute top-1/2 right-4 text-gray text-xl">
          <MdOutlineAccessTime />
        </span>
      </div>

      {/* ============================================================ */}

      <div className="post-content relative">
        <input
          type="text"
          placeholder="Content"
          className="resize-none"
          maxLength="1200"
          ref={content}
        />
        <span className="absolute top-1/2 right-4 text-gray text-xl">
          <IoReaderOutline />
        </span>
      </div>

      {/* ============================================================ */}

      <div className="post-likes relative">
        <input
          type="number"
          placeholder="Number of likes"
          maxLength={"9"}
          ref={likes}
        />
        <span className="absolute top-1/2 right-4 text-gray text-xl">
          <FiThumbsUp />
        </span>
      </div>

      {/* ============================================================ */}

      <div className="post-comments relative">
        <input
          type="number"
          placeholder="Number of comments"
          pattern="\d*"
          maxLength="4"
          ref={comments}
        />
        <span className="absolute top-1/2 right-4 text-gray text-xl">
          <IoChatbubbleOutline />
        </span>
      </div>

      <button className="submit-button text-white text-xl font-semibold">
        Submit
      </button>
    </form>
  );
}

export default DashbordForm;
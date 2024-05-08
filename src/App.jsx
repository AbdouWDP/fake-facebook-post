import "./App.css";
import Post from "./components/Post";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Dashbord from "./components/Dashbord/Dashbord";
import ModeButton from "./components/ModeButton";

function App() {
  const [open, setOpen] = useState(true);
  const [postForm, setPostForm] = useState({
    username: "",
    time: "",
    content: "",
    likes: "",
    comments: "",
    profile_picture: "",
  });

  console.log(postForm);

  return (
    <>
      {open ? (
        <Dashbord
          open={open}
          setOpen={setOpen}
          postForm={postForm}
          setPostForm={setPostForm}
        />
      ) : (
        <>
          {/* <ModeButton open={open} /> */}
          <Tooltip title="Create post" placement="top">
            <button
              className="create-new-post absolute bottom-10 right-10 w-16 h-16 text-white text-2xl flex justify-center items-center rounded-full"
              onClick={() => setOpen(true)}
            >
              <span>
                <FaPlus />
              </span>
            </button>
          </Tooltip>
          <main className="w-screen h-screen flex justify-center items-center flex-col gap-4">
            <Post postForm={postForm} />
          </main>
        </>
      )}
    </>
  );
}

export default App;

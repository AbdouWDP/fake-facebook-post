import Post from "../Post";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import DashbordForm from "./DashbordForm";

function Dashbord({ setOpen, postForm, setPostForm, check, setCheck }) {
  return (
    <>
      <section className="dashbord w-screen h-screen flex justify-center items-center">
        <button
          className="close-dash-button absolute top-5 left-10 max-lg:top-2 max-lg:left-4 text-3xl text-white z-50 rounded-full p-2"
          onClick={() => setOpen(false)}
        >
          <span>
            <IoClose />
          </span>
        </button>
        <div className="w-11/12 h-fit flex max-lg:flex-col gap-4">
          <div className="w-1/2 max-lg:w-full h-full bg-post rounded-lg flex justify-center items-center py-4">
            <DashbordForm
              check={check}
              setCheck={setCheck}
              postForm={postForm}
              setPostForm={setPostForm}
            />
          </div>
          <div className="w-1/2 max-lg:w-full h-full flex justify-center items-center flex-col gap-2">
            <Post width={true} check={check} postForm={postForm} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashbord;

import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { LuDot } from "react-icons/lu";

function UpperPost({ check, postForm }) {
  const default_picture =
    "https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-1/430796318_10115540567190571_8582399341104871939_n.jpg?stp=dst-jpg_p720x720&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zp5CeKK8M0IQ7kNvgHpv7Qf&_nc_ht=scontent.falg6-2.fna&oh=00_AfCUUEOkSyD-O2Ac1oTyM6cxnzSrd-_tme0IhqOM8GiZcA&oe=66412373";

  return (
    <>
      <section className="post-upper flex justify-between items-center">
        <div className="author flex gap-2">
          <div className="author-pic w-11 h-11">
            <img
              src={
                postForm.profile_picture === ""
                  ? default_picture
                  : URL.createObjectURL(postForm.profile_picture)
              }
              alt=""
              className="w-full h-full rounded-full object-cover object-center cursor-pointer"
            />
          </div>
          <div className="author-details">
            <div className="author-name font-semibold hover:underline cursor-pointer flex gap-1 items-center">
              <p>
                {postForm.username === ""
                  ? "Mark Zuckerberg"
                  : postForm.username}
              </p>
              {check && (
                <span className="verified-icon text-sm">
                  <MdVerified />
                </span>
              )}
            </div>
            <div className="post-created-at text-sm text-gray flex items-center">
              <p className="hover:underline cursor-pointer">
                {postForm.time === "" ? "5min" : postForm.time}
              </p>
              <span>
                <LuDot />
              </span>
              <span>
                <FaEarthAmericas />
              </span>
            </div>
          </div>
        </div>
        <div className="upper-post-options text-2xl text-gray flex">
          <button className="w-8 h-8 rounded-full flex justify-center items-center">
            <span>
              <HiDotsHorizontal />
            </span>
          </button>
          <button className="w-8 h-8 rounded-full flex justify-center items-center">
            <span>
              <IoClose />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default UpperPost;

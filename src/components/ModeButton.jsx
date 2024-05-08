import React, { useEffect, useState } from "react";

function ModeButton({ open }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`mode-button absolute left-4 top-4 w-16 h-6 rounded-full bg-white`}
    >
      <div
        className={`w-11/12 h-full flex items-center m-auto cursor-pointer ${
          darkMode ? "justify-start" : "justify-end"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <button className={`w-5 h-5 rounded-full bg-post`}></button>
      </div>
    </div>
  );
}

export default ModeButton;

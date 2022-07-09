import React from "react";

import "../styles/firstLoader.css";

export const FirstLoader = () => {
  return (
    <>
      <div class="f__loader" id="loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p style={{ color: "#88aa00" }} className="load_text">Loading...</p>{" "}
    </>
  );
};

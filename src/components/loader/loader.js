import React from "react";
import { Circles } from "react-loader-spinner";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Circles
        height="80"
        width="80"
        radius="9"
        color="grey"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;

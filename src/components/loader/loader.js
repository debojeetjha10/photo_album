import React from "react";
import { Circles } from "react-loader-spinner";
import "./loader.css";
const Loader = ({ className = "" }) => {
  return (
    <div className={"loader-wrapper " + className}>
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

import React from "react";
import { Circles } from "react-loader-spinner";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-wrapper">
      <Circles
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="Error"
      />
      <h1>something went wrong!</h1>
    </div>
  );
};

export default Error;

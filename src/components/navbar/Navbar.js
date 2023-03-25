import React, { useState } from "react";
import { SlReload } from "react-icons/sl";
import "./Navbar.css";

const Navbar = ({ refreshFn = async () => {} }) => {
  const [isRotate, setIsRotate] = useState(false);
  return (
    <div className="navbar">
      <p></p>
      <h1>Photo Galary</h1>
      <SlReload
        size={"5vh"}
        className={isRotate ? "rotate" : ""}
        onClick={async () => {
          setIsRotate((v) => !v);
          await refreshFn();
          setIsRotate((v) => !v);
        }}
      />
    </div>
  );
};
export default Navbar;

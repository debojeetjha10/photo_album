import React from "react";
import "./Photos.css";
const Photos = ({ src, alt = "", className = "", onClick = () => {} }) => {
  return (
    <div className={"photos-wrapper " + className} onClick={onClick}>
      <img className="photos" src={src} alt={alt}></img>
    </div>
  );
};

export default Photos;

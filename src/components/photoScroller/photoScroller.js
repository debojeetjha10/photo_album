import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import Loader from "../loader/loader";
import Photos from "../photos/Photos";
import "./photoScroller.css";

const PhotoScroller = ({ images, pos, closingFunction }) => {
  const [currIndex, setCurrIndex] = useState(pos);
  const [prevButton, setPreButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
    setPreButton(true);
    setNextButton(true);
    if (currIndex <= 0) setPreButton(true);
    else setPreButton(false);
    if (currIndex + 1 >= images.length) setNextButton(true);
    else {
      setNextButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currIndex]);

  return (
    <div className="photo-scroller-wrapper">
      <div className="photo-scroller">
        <button
          className="download-button"
          onClick={() =>
            saveAs(images[currIndex].urls.full, `${images[currIndex].id}.png`)
          }
          href={images[currIndex].urls.full}
        >
          Download &darr;
        </button>
        <button onClick={closingFunction} className="photo-scroller-x">
          X
        </button>
        <button
          className="previous-button"
          onClick={() => setCurrIndex((val) => val - 1)}
          disabled={prevButton}
        >
          &lt;
        </button>
        <button
          className="next-button"
          onClick={() => setCurrIndex((val) => val + 1)}
          disabled={nextButton}
        >
          &gt;
        </button>
        <div className="scroller-photo-wrapper">
          {imageLoading ? <Loader /> : null}
          <img
            src={images[currIndex].urls.full}
            alt={images[currIndex].urls.alt_description}
            style={{
              display: imageLoading ? "none" : "block",
              objectFit: "contain",
            }}
            onLoad={(e) => {
              console.log("Loaded: ", currIndex);
              setImageLoading(false);
            }}
          ></img>
        </div>
      </div>

      <div className="bottom-image-selector">
        {images.map((image, idx) => (
          <Photos
            className={
              "bottom-images " +
              (idx === currIndex ? "bottom-selected-image" : "")
            }
            src={image.urls.thumb}
            alt={image.alt_description}
            onClick={() => setCurrIndex(idx)}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default PhotoScroller;

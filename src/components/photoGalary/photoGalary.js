import React, { useState } from "react";
import { useQuery } from "react-query";
import getArrayOfPhotos from "../../helpers/getArrayOfPhotos";
import Error from "../error/Error";
import Photos from "../photos/Photos";
import PhotoScroller from "../photoScroller/photoScroller";
import "./photoGalary.css";

const PhotoGalary = () => {
  const { data, isError, isLoading } = useQuery(
    "getRandomPhotos",
    getArrayOfPhotos
  );

  const [scrollerPosition, setScrollerPosition] = useState(-1);
  const onClickOnImage = (pos) => setScrollerPosition(pos);

  if (isError) return <Error />;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (data) {
    if (scrollerPosition !== -1)
      return (
        <PhotoScroller
          images={data}
          pos={scrollerPosition}
          closingFunction={() => setScrollerPosition(-1)}
        />
      );

    return (
      <div className="galary">
        {data.map((image, idx) => (
          <Photos src={image.urls.small} onClick={() => onClickOnImage(idx)} />
        ))}
      </div>
    );
  }
};

export default PhotoGalary;

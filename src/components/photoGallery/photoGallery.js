import React, { useState } from "react";
import { useQuery } from "react-query";
import getArrayOfPhotos from "../../helpers/getArrayOfPhotos";
import Error from "../error/Error";
import Loader from "../loader/loader";
import Photos from "../photos/Photos";
import PhotoScroller from "../photoScroller/photoScroller";
import "./photoGallery.css";

const PhotoGallery = () => {
  const { data, isError, isLoading, isFetching } = useQuery(
    "getRandomPhotos",
    getArrayOfPhotos,
    { refetchIntervalInBackground: false }
  );

  const [scrollerPosition, setScrollerPosition] = useState(-1);
  const onClickOnImage = (pos) => setScrollerPosition(pos);

  if (isError) return <Error />;

  if (isLoading || isFetching) {
    return <Loader className="loader-height" />;
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
      <div className="gallery">
        {data.map((image, idx) => (
          <Photos
            key={image.id}
            src={image.urls.small}
            onClick={() => onClickOnImage(idx)}
          />
        ))}
      </div>
    );
  }
};

export default PhotoGallery;

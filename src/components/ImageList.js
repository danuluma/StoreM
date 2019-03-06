import React from "react";
import Image from "./Image";

const ImageList = props => {
  const results = props.data;

  if (results) {
    let images = results.map(image => (
      <Image url={image.urls.small} key={image.id} />
    ));

    return <div className="row images">{images}</div>;
  }
  return <div className="img-list">Please Wait</div>;
};

export default ImageList;

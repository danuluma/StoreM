import React from "react";
import Image from "./Image";

const ImageList = props => {
  const results = Object.values(props.data);

  if (results[0]) {
    let images = results[0].map(image => (
      <Image url={image.url} key={image.id} />
    ));

    return <div className=" images">{images}</div>;
  }
  return <div className="img-list">Please Wait</div>;
};

export default ImageList;

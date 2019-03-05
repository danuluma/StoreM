import React from "react";
import Image from "./Image";

const ImageList = props => {
  const manualBackup = {
    images: [
      {
        id: 228,
        url:
          "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mzzqwktTbR1st5lhmo1_1280.jpg",
        large_url: "https://splashbase.s3.amazonaws.com/unsplash/large/1m7Zhb7",
        source_id: 149,
        copyright: "CC0",
        site: "unsplash"
      },
      {
        id: 306,
        url:
          "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n4cm36DV9F1st5lhmo1_1280.jpg",
        large_url: "https://splashbase.s3.amazonaws.com/unsplash/large/1tpS8Xj",
        source_id: 207,
        copyright: "CC0",
        site: "unsplash"
      },
      {
        id: 598,
        url:
          "https://splashbase.s3.amazonaws.com/travelcoffeebook/regular/tumblr_n4jw21f2291ta0hnbo1_1280.jpg",
        large_url:
          "https://splashbase.s3.amazonaws.com/travelcoffeebook/large/tumblr_n4jw21f2291ta0hnbo1_1280.jpg",
        source_id: null,
        copyright: "CC0",
        site: "travelcoffeebook"
      },
      {
        id: 1067,
        url:
          "https://splashbase.s3.amazonaws.com/jaymantri/regular/tumblr_n4yj31TScm1qfirfao1_1280.jpg",
        large_url:
          "https://splashbase.s3.amazonaws.com/jaymantri/large/1fWgm2m",
        source_id: null,
        copyright: "CC0",
        site: "jaymantri"
      }
    ]
  };
  const results = Object.values(manualBackup);

  if (results[0]) {
    let images = results[0].map(image => (
      <Image url={image.url} key={image.id} />
    ));

    return <div className=" images">{images}</div>;
  }
  return <div className="img-list">Please Wait</div>;
};

export default ImageList;

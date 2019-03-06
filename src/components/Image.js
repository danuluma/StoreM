import React from "react";

const Image = props => (
  <div className="col img-wrap  col-md-4">
    <div className="">Yummy</div>
    <img src={props.url} alt="" className="" />
    <p className="">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
);

export default Image;

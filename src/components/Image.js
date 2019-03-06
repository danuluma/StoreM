import React from "react";

const Image = props => (
  <div className="img-wrap  ">
    <div className="col-md-12">Yummy</div>
    <img src={props.url} alt="" className="col-md-12" />
    <p className="col-md-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
);

export default Image;

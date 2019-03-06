import React, { Component } from "react";
import ImageList from "./ImageList";
const Unsplash = require("unsplash-js").default;

const unsplash = new Unsplash({
  applicationId: process.env.APP_ID,
  secret: process.env.SECRET
});

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    unsplash.search
      .photos("food", 1, 30)
      .then(data => data.json())
      .then(resp => {
        let imageList = resp.results;
        this.setState({ images: imageList });
      });
  }

  render() {
    if (localStorage.getItem("alert")) {
      alertify.success("Signed in successfully");
      localStorage.removeItem("alert");
    }
    if (localStorage.getItem("logout")) {
      alertify.success("Signed out successfully");
      localStorage.removeItem("logout");
    }
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title" />
          </div>
        </div>
        <div className="main-content">
          <ImageList data={this.state.images} />
        </div>
      </div>
    );
  }
}
export default Menu;

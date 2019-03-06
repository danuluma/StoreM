import React, { Component } from "react";
import Unsplash from "unsplash-js";
import ImageList from "./ImageList";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch("http://www.splashbase.co/api/v1/images/search?query=food")
      .then(res => res.json())
      .then(data => {
        this.setState({ images: data });
      })
      .catch(err => {});
  }

  render() {
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

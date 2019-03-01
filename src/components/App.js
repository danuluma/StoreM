import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import "../assets/css/App.scss";

class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
export default hot(App);

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        {/* <div className="alert alert-success alert-dismissible">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">
            &times;
          </a>
          <strong>Success!</strong> This alert box could indicate a successful
          or positive action.
        </div> */}
        <Container className="App">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;

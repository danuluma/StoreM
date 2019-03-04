import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";

class DannsNav extends Component {
  render() {
    // return <div> KKK</div>;
    return (
      <Navbar className="nav-bar">
        <Navbar.Brand>
          <NavLink to="/">Danns Fast Foods</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default DannsNav;

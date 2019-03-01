import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";

class DannsNav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href="#home">Danns Fast Foods</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <NavLink to="/login">Login</NavLink> */}
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default DannsNav;

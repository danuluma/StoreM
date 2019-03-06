import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const DannsNav = () => {
  return (
    <Navbar className="nav-bar" expand="lg">
      <React.Fragment>
        <Navbar.Brand>
          <NavLink to="/">Danns Fast Foods</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="nav-link">
            Sign Up
          </NavLink>
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
  );
};

export default DannsNav;

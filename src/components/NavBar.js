import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logout from "./Logout";

const DannsNav = () => {
  return (
    <Navbar className="nav-bar" expand="lg">
      <React.Fragment>
        <Navbar.Brand>
          <NavLink to="/">Danns Fast Foods</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {localStorage.getItem("token") ? (
            <NavLink to="" className="nav-link" onClick={logout}>
              Logout
            </NavLink>
          ) : (
            <React.Fragment>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </React.Fragment>
          )}
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
  );
};

export default DannsNav;

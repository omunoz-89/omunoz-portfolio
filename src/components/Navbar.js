/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top-nav navbar is-transparent is-fixed-top">
      <NavLink className="nav-links navbar-item" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-links navbar-item" to="/skills">
        Skills
      </NavLink>
      <NavLink className="nav-links navbar-item" to="/projects">
        Projects
      </NavLink>
    </div>
  );
};

export default Navbar;

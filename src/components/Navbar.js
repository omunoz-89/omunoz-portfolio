/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
  
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="nav-links navbar-start">
      <NavLink className="navbar-item" exact to="/">Home</NavLink>
      <NavLink className="navbar-item"  to="/about">About</NavLink>
      <NavLink className="navbar-item"  to="/projects">Projects</NavLink>

      </div>

        <div class="navbar-item">
        </div>
    </div>
  </nav>
  );
};

export default Navbar;



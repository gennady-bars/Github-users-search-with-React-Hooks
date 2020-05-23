import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <NavLink to="/" className="navbar-brand">
      Github Search
    </NavLink>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About me
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

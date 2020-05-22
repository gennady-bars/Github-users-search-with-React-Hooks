import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-md">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">About me</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="items">
        <div>
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

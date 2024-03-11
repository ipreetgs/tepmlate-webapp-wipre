// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Wipro Comnet</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/unveil-digital-potential">Unveil Your Digital Potential</Link></li>
        <li><Link to="/get-custom-strategy">Get Your Custom Strategy</Link></li>
        <li><Link to="/explore-our-services">Explore Our Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export const MobileMenu = () => {
  return (
    <div className="mobi-menu">
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="products">Products</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
    </div>
  )
}

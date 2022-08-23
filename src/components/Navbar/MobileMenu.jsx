import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ShowNavContext } from '../../Context/GlobalContext';
export const MobileMenu = () => {
  const {show, setShow} = useContext(ShowNavContext);
  const handleShowMenu = () => {
    setShow(!show);
  }
  return (
    <div className="mobi-menu">
        <ul>
          <li onClick={handleShowMenu}><Link to="">Home</Link></li>
          <li onClick={handleShowMenu}><Link to="products">Products</Link></li>
          <li onClick={handleShowMenu}><Link to="about">About Us</Link></li>
          <li onClick={handleShowMenu}><Link to="contact">Contact</Link></li>
        </ul>
    </div>
  )
}

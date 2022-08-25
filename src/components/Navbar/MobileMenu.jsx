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
          <Link to=""><li onClick={handleShowMenu}>Home</li></Link>
          <Link to="products"><li onClick={handleShowMenu}>Products</li></Link>
          <Link to="about"><li onClick={handleShowMenu}>About Us</li></Link>
          <Link to="contact"><li onClick={handleShowMenu}>Contact</li></Link>
        </ul>
    </div>
  )
}

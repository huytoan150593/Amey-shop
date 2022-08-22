import { useState } from 'react';
import { BsInstagram, BsFacebook, BsCart3} from 'react-icons/bs';
import './Navbar.css';
import { MobileMenu } from './MobileMenu';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div id='navbar'>
        <div className="header">
            <div className='distance'></div>
            <Link to='' className='logo'>
                <img src="assets/logo.png" alt="logo" />
            </Link>
            <div className="icons">
                <a className="icon" href="https://www.instagram.com/ameystoree/"><BsInstagram size={30}/></a>
                <a className="icon" href="https://www.facebook.com/profile.php?id=100064902188811"><BsFacebook size={30}/></a>
                <a href="google.com" className="icon"><BsCart3 size={30}/></a>
                <span id='toggle-btn' onClick={handleClick}></span>
            </div>
        </div>
        <div className="menu">
            <ul>
                <li className='menu-item'><Link to="">Home</Link></li>
                <li className='menu-item'><Link to="products">Products</Link></li>
                <li className='menu-item'><Link to="about">About Us</Link></li>
                <li className='menu-item'><Link to="contact">Contact</Link></li>
                <li className='menu-item'><Link to="blog">Blog</Link></li>
            </ul>
        </div>
        { show && <MobileMenu />}
    </div>
  )
}

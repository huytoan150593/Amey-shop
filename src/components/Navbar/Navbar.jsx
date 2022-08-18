import { useState } from 'react';
import { BsInstagram, BsFacebook, BsCart3} from 'react-icons/bs';
import './Navbar.css';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div className='navbar'>
        <div className="header">
            <div className='distance'></div>
            <div className='logo'>
                <img src="assets/logo.png" alt="logo" />
            </div>
            <div className="icons">
                <a className="icon" href="https://www.instagram.com/ameystoree/"><BsInstagram size={30}/></a>
                <a className="icon" href="https://www.facebook.com/profile.php?id=100064902188811"><BsFacebook size={30}/></a>
                <a href="google.com" className="icon"><BsCart3 size={30}/></a>
                <span id='toggle-btn' onClick={handleClick}></span>
            </div>
        </div>
        <div className="menu">
            <ul>
                <li className='menu-item'>About Us</li>
                <li className='menu-item'>Products</li>
                <li className='menu-item'>Contact Us</li>
            </ul>
        </div>
        { show && <MobileMenu />}
    </div>
  )
}

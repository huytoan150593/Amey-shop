import React from 'react';
import './Footer.css';
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
    <div id='footer'>
        {/* <img src="/assets/background-footer.jpg" alt="" /> */}
        <div id="e-form">
            <h1>Amey-Shop</h1>
            <input type="text" placeholder='Enter Your E-Mail *'/>
            <div id="btn-submit">Subscribe</div>
        </div>
        <div id="info">
            <h3>Info</h3>
            <p>Phone: 0000-0000-xxx</p>
            <p>E-mail:  yourmail@example.com</p>
            <p>Address: 1234 Street Name City, AA 99999</p>
            <div className="icons-group">
                <a href="https://www.instagram.com/ameystoree/"><BsInstagram className='icon-ft' size={25}/></a>
                <a href="https://www.facebook.com/profile.php?id=100064902188811"><BsFacebook className='icon-ft' size={25}/></a>
                <a href="twitter.com"><BsTwitter className='icon-ft' size={25}/></a>
                <a href="youtube.com"><BsYoutube className='icon-ft' size={25}/></a>
            </div>
        </div>
        <div id="navi">
            <h3>Quick links</h3>
            <p><a href="google.com">Return Policy</a></p>
            <p><a href="google.com">Shipping and Delivery</a></p>
            <p><a href="google.com">Term Of Service</a></p>
        </div>
    </div>
  )
}

export default Footer
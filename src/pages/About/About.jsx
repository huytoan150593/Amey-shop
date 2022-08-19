import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id='about'>
        <div className="title">About Us</div>
        <div className="content">
        A commited project by Benjamin Tran to bridge (/brij/)  the gap between luxury and fast fashion. Bringing you the highest quality clothing piece at the most affordable price with modern contemporary aesthetic fusing classic and timeless designs. 
        </div>
        <div className='form-wrapper'>
            <h3>Stay Update!!</h3>
            <div className="sub-form">
                <input type="text" placeholder='Email address'/>
                <span id="sub-btn">SUSCRIBE</span>
            </div>
        </div>
    </div>
  )
}

export default About

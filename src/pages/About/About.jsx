import React from 'react';
import Title from '../../components/Title/Title';
import './About.css';

const About = () => {
  return (
    <div id='about'>
        <Title title="About Us"/>
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

import React from 'react';
import './Form.css';
import { MdPersonOutline, MdOutlineSmartphone, MdOutlineEmail, MdOutlineMessage } from 'react-icons/md';
const Form = () => {
  return (
    <div id="form-wrapper">
        <form method="post" className="ccform">
            <div className="ccfield-prepend">
                <span className="ccform-addon"><MdPersonOutline size={40}/><p>Full Name</p></span>
                <input className="ccformfield" type="text" placeholder="Enter your name..." required />
            </div>
            <div className="ccfield-prepend">
                <span className="ccform-addon"><MdOutlineEmail size={40}/><p>E-mail</p></span>
                <input className="ccformfield" type="text" placeholder="Please give us your e-mail address..." required />
            </div>
            <div className="ccfield-prepend">
                <span className="ccform-addon"><MdOutlineSmartphone size={40}/><p>Phone Number</p></span>
                <input className="ccformfield" type="text" placeholder="Don't forget your phone number..." />
            </div>
                <div className="ccfield-prepend">
                <span className="ccform-addon"><MdOutlineMessage size={40}/><p>Message to us</p></span>
                <textarea className="ccformfield" name="comments" rows="6" placeholder="Let me know if you have anything question." required></textarea>
            </div>
            <div className="ccfield-prepend submit">
                <input className="ccbtn" type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}

export default Form
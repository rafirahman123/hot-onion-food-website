import React from 'react';
import onion from '../../images/Image/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6">
                    <img className="footer-icon" src={onion} alt="" />
                </div>
                <div className="col-3">
                    <p>About Online Food</p>
                    <p>Read our blogs</p>
                    <p>Sign up to deliver</p>
                    <p>Add your resturent</p>
                </div>
                <div className="col-3">
                    <p>About Online Food</p>
                    <p>Read our blogs</p>
                    <p>Sign up to deliver</p>
                    <p>Add your resturent</p>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p className="text-start">Terms and condition</p>
                </div>
                <div className="col-2">
                    <p>Privacy Policy</p>
                </div>
                <div className="col-2">
                    <p>Terms and condition</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
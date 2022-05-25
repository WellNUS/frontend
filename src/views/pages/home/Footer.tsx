import React from "react";
import "./styled/styles.css"

const Footer = () => {
    return <div className="home-footer">
        <div className="home-footer-left">
            <div className="home-footer-heading">
                WellNUS
            </div>
            <div className="home-footer-subheading">
                Copyright © 2022 Team State            
            </div>
        </div>
        <div className="home-footer-right">
            <div className="home-footer-heading">Community</div>
            <div className="home-footer-subheading">About Us</div>
            <div className="home-footer-subheading">Contact Us</div>
            <br/>
            <br/>
            <div className="home-footer-heading">Legal</div>
            <div className="home-footer-subheading">Terms and Conditions</div>
            <div className="home-footer-subheading">Privacy Policy</div>
        </div>
    </div>
}

export default Footer;
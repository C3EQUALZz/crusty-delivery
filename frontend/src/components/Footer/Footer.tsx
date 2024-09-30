import "./Footer.css"
import {assets} from "../../assets/assets.ts";

export const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo of our company"/>
                    <p>Any text for checking</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook icon"/>
                        <img src={assets.twitter_icon} alt="Twitter icon"/>
                        <img src={assets.linkedin_icon} alt="Linkedin icon"/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>88005553535</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @Tomato.com - All Rights Reserved. </p>
        </div>
    )
}
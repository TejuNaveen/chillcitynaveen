import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

import './Footer.scss'

const Footer = props => {
  return (
    <footer className="footer-container">
      <div className="social-buttons">
        <ul>
          <li className="social-btn ">
            <a  target="_blank" href="https://www.youtube.com/chillcitynaveen/" className="react-icon youtube" ><FaYoutube /></a>
          </li>
          <li className="social-btn ">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100001546497276" className="react-icon facebook"><FaFacebook /></a>
          </li>
          <li className="social-btn ">
            <a  target="_blank" href="https://www.instagram.com/tejunaveen/?hl=en" className="react-icon instagram"><FaInstagram /></a>
          </li>
          <li className="social-btn ">
            <a  target="_blank" href="https://twitter.com/Naveen83316685" className="react-icon twitter"><FaTwitter  /></a>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/skills" >Skills</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
        <li>
          <Link to="/about" >About Us</Link>
        </li>
        </ul>
      </div>
      <div className="copyright-contanier">
        <p>Copyright © 2020 Chill City Naveen Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

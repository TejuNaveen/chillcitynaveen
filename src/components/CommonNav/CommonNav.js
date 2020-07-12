import React, { Component } from "react";
import { Link } from "react-router-dom";

import './CommonNav.scss';

const CommonMenu = props => (
    <ul className="nav-menu" onClick={props.click}>
      <li>
        <Link to="/" data-menu-name="HOME" className="menu-links">Home</Link>
      </li>
      <li>
        <Link to="/skills" data-menu-name="SKILLS" className="menu-links">Skills</Link>
      </li>
      <li>
        <Link to="/contact" data-menu-name="CONTACT" className="menu-links">Contact</Link>
      </li>
      <li>
        <Link to="/about" data-menu-name="ABOUT US" className="menu-links">About Us</Link>
      </li>
    </ul>
)

export default CommonMenu;

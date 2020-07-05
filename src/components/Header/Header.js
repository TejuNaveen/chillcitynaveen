import React from "react";
import DrawerToggleBtn from "../Sidedrawer/DrawerToggleBtn";
import "./Header.scss";

import CommonMenu from "../CommonNav/CommonNav";
import Logo from "../../images/logo.png";
const Header = props => (
  <header className="main-header">
    <nav className="header-navigation">
      <div className="hamburger-menu">
        <DrawerToggleBtn click={props.drawerClickHandler} />
      </div>
      <div className="main-logo">
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />
          <span>Chill City Naveen</span>
        </a>
      </div>
      <div className="spacer" />
      <div className="sidebar-navigation">
        <CommonMenu />
      </div>
    </nav>
  </header>
);

export default Header;

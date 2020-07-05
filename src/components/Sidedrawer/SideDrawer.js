import React from "react";
import "./SideDrawer.scss";
import CommonMenu from "../CommonNav/CommonNav";
import Logo from "../../images/logo.png";

const SideDrawer = props => {
  let drawerClass = "side-drawer";
  if (props.show) {
    drawerClass = "side-drawer open";
  }
  return (
    <nav className={drawerClass}>
      <a href="/">
        <img src={Logo} alt="logo" className="logo" />
        <span>Chill City Naveen</span>
      </a>
      <button className="close" onClick={props.close} />
      <CommonMenu />
    </nav>
  );
};
export default SideDrawer;

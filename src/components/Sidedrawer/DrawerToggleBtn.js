import React from "react";

import "./DrawerBtn.scss";

const DrawerToggleBtn = props => (
  <button className="toggle-btn" onClick={props.click}>
    <div className="toggle-bar" />
    <div className="toggle-bar" />
    <div className="toggle-bar" />
  </button>
);

export default DrawerToggleBtn;

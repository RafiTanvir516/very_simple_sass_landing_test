import React from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle"></div>
        <div className="mode"></div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#launch">Launch</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

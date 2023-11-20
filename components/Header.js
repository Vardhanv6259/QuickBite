import React from "react";
import logo from "../utils/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="app logo" />
      </div>
      <div className="menu">
        <nav>
          <ul className="items">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="searching">
        <input type="text" placeholder="food or restaurant"></input>
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;

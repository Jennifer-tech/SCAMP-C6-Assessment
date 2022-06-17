import React, { useState } from "react";
import "./NavBar.css";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
function NavBar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="navWrapper">
      <div className="nav">
        <div className="togggler_brand">
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <a href="#" className="brand">
            sneakers
          </a>
        </div>
        <ul className={active}>
          <li className="nav_item">
            <a href="#" className="nav-link">
              Collections
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Men
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Women
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              About
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Contact
            </a>
          </li>
        </ul>
      </div>
        <div className="iconRight">
          <AiOutlineShoppingCart className="cartIcon" />
          <FaUserCircle className="user" />
        </div>
    </nav>
  );
}

export default NavBar;

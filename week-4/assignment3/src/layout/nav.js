import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./pictures/logo/nomad_sketching_logo.svg";

const Nav = () => {
  let [menuClass, setMenuClass] = useState("menu");
  let [closeIconStyle, setCloseIconStyle] = useState("none");
  let [menuIconStyle, setMenuIconStyle] = useState("block");

  const changeMenuState = () => {
    if (menuClass === "menu showMenu") {
      setMenuClass("menu");
      setCloseIconStyle("none");
      setMenuIconStyle("block");
    } else {
      setMenuClass("menu showMenu");
      setCloseIconStyle("block");
      setMenuIconStyle("none");
    }
  };
  return (
    <Router>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul className={menuClass}>
            <li className="menuItem">
              <Link to="#">首頁</Link>
            </li>
            <li className="menuItem">
              <Link to="#">關於我</Link>
            </li>
            <li className="menuItem">
              <Link to="#">聯絡我</Link>
            </li>
          </ul>
          <button className="icon" onClick={changeMenuState}>
            <i
              className="fa-solid fa-bars"
              style={{ display: menuIconStyle }}
            ></i>
            <i
              className="fa-solid fa-xmark"
              style={{ display: closeIconStyle }}
            ></i>
          </button>
        </nav>
      </header>
    </Router>
  );
};

export default Nav;

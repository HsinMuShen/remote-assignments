import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./pictures/logo/nomad_sketching_logo.svg";

const Nav = () => {
  const [changeStyle, setChangeStyle] = useState({
    menuClass: "menu",
    closeIconStyle: "none",
    menuIconStyle: "block",
  });

  const changeMenuState = () => {
    if (changeStyle.menuClass === "menu showMenu") {
      setChangeStyle({
        menuClass: "menu",
        closeIconStyle: "none",
        menuIconStyle: "block",
      });
    } else {
      setChangeStyle({
        menuClass: "menu showMenu",
        closeIconStyle: "block",
        menuIconStyle: "none",
      });
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
          <ul className={changeStyle.menuClass}>
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
              style={{ display: changeStyle.menuIconStyle }}
            ></i>
            <i
              className="fa-solid fa-xmark"
              style={{ display: changeStyle.closeIconStyle }}
            ></i>
          </button>
        </nav>
      </header>
    </Router>
  );
};

export default Nav;

import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./pictures/logo/nomad_sketching_logo.svg";

const Nav = () => {
  const [changeStyle, setChangeStyle] = useState(true);
  const changeMenuState = () => {
    if (changeStyle) {
      setChangeStyle(false);
    } else {
      setChangeStyle(true);
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
          <ul className={changeStyle ? null : "showMenu"}>
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
            {changeStyle ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </button>
        </nav>
      </header>
    </Router>
  );
};

export default Nav;

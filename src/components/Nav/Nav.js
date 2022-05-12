import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import { checkAuth, logoutUser } from "../../Router";
import "./Nav.css";

const Nav = () => {
  

  return (
    <nav className="nav-bar">
      <img src={logo} className="logo"/>
      <h8 className="name">Course Tracker</h8>
      {checkAuth() && (
        <p className="name-tag">Welcome, {localStorage.getItem("user_name")}</p>
      )}
      {checkAuth() && (
        <button className="nav-link">
          <Link to="/" className="link"
            onClick={() => logoutUser()}
          >
            Logout
          </Link>
        </button>
      )}
    </nav>
  );
};

export default Nav;

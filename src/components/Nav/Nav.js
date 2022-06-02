import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { checkAuth, logoutUser } from "../../Router";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div class="left-half-nav">
        <div class="logo-name-cont">
          <img src={logo} className="logo" alt="logo-img" />
          <div class="names-cont">
            <h4 className="name">Course Tracker</h4>
            {checkAuth() && (
            <p className="name-tag">Welcome, {localStorage.getItem("user_name")}</p>
          )}
          </div>
        </div>
        
      </div>
      
      {checkAuth() && (
        <button className="nav-link" onClick={() => logoutUser()}>
          <Link to="/" className="link">
            Logout
          </Link>
        </button>
      )}
    </nav>
  );
};

export default Nav;

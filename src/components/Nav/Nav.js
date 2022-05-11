import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { checkAuth, logoutUser } from "../../Router";
import "./Nav.css";

const Nav = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="nav-bar">
      {checkAuth() && (
        <p className="name-tag">Welcome, {localStorage.getItem("user_name")}</p>
      )}
      {checkAuth() ? (
        <button className="nav-link">
          <Link to="/" className="link"
            onClick={() => logoutUser()}
          >
            Logout
          </Link>
        </button>
      ) : (
        <button className="nav-link">
          {currentPath === "/" ? (
            <Link
              className="link"
              to="/signup"
              onClick={() => {
                window.location.replace("/signup");
              }}
            >
              Sign Up
            </Link>
          ) : (
            <Link
              className="link"
              to="/"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Sign In
            </Link>
          )}
        </button>
      )}
    </nav>
  );
};

export default Nav;

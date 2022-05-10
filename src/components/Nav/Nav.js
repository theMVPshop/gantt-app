import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { checkAuth } from "../../Router";
import IdleTimer from "../IdleTimer";
import "./Nav.css";

const Nav = () => {
  const currentPath = window.location.pathname;

  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 5, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
        document.cookie = "loggedIn=";
        localStorage.clear();
        window.location.replace("/");
      },
      onExpired: () => {
        //do something if expired on load
        setIsTimeout(true);
        document.cookie = "loggedIn=";
        localStorage.clear();
      }
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <nav className="nav-bar">
      { checkAuth() && <p className="name-tag">Welcome, {localStorage.getItem("user_name")}</p> }
      { checkAuth() ? 
        <button className="nav-link">
          <Link to="/" className="link"
            onClick={() => {
            document.cookie = "loggedIn="
            localStorage.clear()
            window.location.replace("/")}}
          >
            Logout
          </Link>
        </button>
        :
        <button className="nav-link">
          { 
            currentPath === "/" ? 
            <Link className="link" to="/signup" onClick={() => {window.location.replace("/signup")}}>Sign Up</Link> 
            : <Link className="link" to="/" onClick={() => {window.location.replace("/")}}>Sign In</Link> 
          }
        </button>  
      }
    </nav>
  );
};

export default Nav;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { checkAuth } from "../../Router";
import CohortForm from "../Forms/CohortForm.js";
import "./Nav.css";

const Nav = () => {
  // confirming that this is 
  // const [cohortFormDisplay, setCohortFormDisplay] = useState({
  //   display: true,
  // });

  const currentPath = window.location.pathname;
  console.log(currentPath)

  return (
    <nav className="nav-bar">
      { checkAuth() && <p className="name-tag">Welcome, {localStorage.getItem("user_name")}</p> }
      {/* { checkAuth() ? 
        <button className="nav-link">
          <Link to="/" className="link"
            onClick={() => {
            document.cookie = "loggedIn="
            localStorage.clear()
            window.location.replace("/")}}
          >
            Logout
          </Link>
        </button> : 
        <button className="nav-link">
          <Link className="link" to="/signup">Sign Up</Link>
        </button> 
      } */}
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

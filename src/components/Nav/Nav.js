import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CohortForm from "../Forms/CohortForm.js";
import "./Nav.css";

const Nav = () => {
  const [cohortFormDisplay, setCohortFormDisplay] = useState({
    display: true,
  });

  return (
    <nav className="nav-bar">
      <p>Welcome, {localStorage.getItem("user_name")}</p>
      <CohortForm cohortDisplay={cohortFormDisplay}></CohortForm>
      <button className="nav-link">
        <Link to="/login" className="link">
          Logout
        </Link>
      </button>
      <button className="nav-link">
        <Link to="/signup">Sign Up</Link> 
      </button>
    </nav>
  );
};

export default Nav;

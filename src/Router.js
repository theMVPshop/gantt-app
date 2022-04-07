import React from "react";
import { Routes, Route } from "react-router-dom";
import cookie from "cookie";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";

import CohortForm from "./components/Forms/CohortForm";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("cookies", cookies);

  return cookies["loggedIn"] ? true : false;
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      {/* Dashboard renders the Gantt chart with data */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      For testing purposes, this route displays the CohortForm
      <Route path="/cohortForm" element={<CohortForm />} />
    </Routes>
  );
};

export default Router;

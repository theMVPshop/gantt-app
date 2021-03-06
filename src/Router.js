import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from "cookie";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import Nav from "./components/Nav/Nav.js";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);

  return cookies["loggedIn"] ? true : false;
};

export const logoutUser = () => {
  document.cookie = "loggedIn=";
  localStorage.clear();
  window.location.replace("/");
}

const ProtectedRoute = ({ children }) => {
  return checkAuth() ? children : <Navigate to="/" />
}

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Dashboard renders the Gantt chart with data */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Nav />
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
    
  );
};

export default Router;

import React, { Component, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router.js";
import Nav from "./components/Nav/Nav.js";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
};

export default App;

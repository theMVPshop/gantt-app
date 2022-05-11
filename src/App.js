import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router, { checkAuth, logoutUser } from "./Router.js";
import Nav from "./components/Nav/Nav.js";
import IdleTimer from "./components/IdleTimer.js";

import "./App.css";

const App = () => {

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 7200, //expire after 7,200 seconds (2 hours)
      onTimeout: () => {
        logoutUser();
      },
      onExpired: () => {
        //do something if expired on load
        logoutUser();
      }
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <BrowserRouter>
      {checkAuth() && <Nav />}
      <Router />
    </BrowserRouter>
  );
};

export default App;

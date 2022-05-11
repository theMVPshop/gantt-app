import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router, { logoutUser } from "./Router.js";
import Nav from "./components/Nav/Nav.js";
import IdleTimer from "./components/IdleTimer.js";

import "./App.css";

const App = () => {

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 5, //expire after 5 seconds
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
      <Nav />
      <Router />
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router, { logoutUser } from "./Router.js";
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
      <Router />
    </BrowserRouter>
  );
};

export default App;

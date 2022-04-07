import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import CohortForm from "./components/Forms/CohortForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* Dashboard renders the Gantt chart with data */}
      <Route path="/dashboard" element={<Dashboard />} />
      For testing purposes, this route displays the CohortForm
      <Route path="/cohortForm" element={<CohortForm />} />
    </Routes>
  );
};

export default Router;

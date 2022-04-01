import * as React from "react";
import { useEffect, useRef, useState } from "react";

import Gantt from "./Gantt/Gantt.js";

//Dummy data to display in the chart

const Dashboard = () => {
  //Gantt chart is rendered using data variable
  return (
    <div className="gantt-container">
      <Gantt />
    </div>
  );
};

export default Dashboard;

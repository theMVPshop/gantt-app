import * as React from "react"

import Gantt from "./Gantt/Gantt.js"

//Dummy data to display in the chart
const data = {
  data: [
    {
      id: 1,
      text: "Task #1",
      start_date: "2019-04-15",
      duration: 3,
      progress: 0.6,
    },
    {
      id: 2,
      text: "Task #2",
      start_date: "2019-04-18",
      duration: 3,
      progress: 0.4,
    },
    {
      id: 3,
      text: "Task #2",
      start_date: "2019-04-18",
      duration: 3,
      progress: 0.4,
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }],
};

const Dashboard = () => {
  //Gantt chart is rendered using data variable
  return (
    <div className="gantt-container">
      <Gantt tasks={data} />
    </div> 
  )
}

export default Dashboard
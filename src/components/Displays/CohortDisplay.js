import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import { useForm } from "react-hook-form";

import "./Displays.css"

const CohortDisplay = (props) => {
  let CohortName = props.cohortDisplay
  let StartDate = "FakeStartDate"
  let GraduationDate = "FakeStartDate"


  //create state for the task to be displayed
  const[task, setTask] = useState()
  
  gantt.attachEvent("onTaskDblClick", function (id, e) {

    
  console.log("onTaskDbleClick props.data.data: ", props.data.data)
  let data = props.data.data
// callback func to find task that matches clicked task's id
  function getCurrentTask() {

    for (let i = 0; i < data.length; i++) {
      console.log("data[i].id in for loop: ", data[i].id)
      if(data[i].id == id ){
        console.log("THEY MATCH!")
        setTask(data[i])
        return 
      }
    }
  }
    getCurrentTask()
    // decide if it's a cohort or a course
    //   likely by reading the first part of the id
    // display a modal by setCohortDisplay display to true
    // setCohortDisplay id to id
    // map over data
    // to find object where id matches id
    // figure out the use effect in 
  return true
 
  });


  

  return (
    <form className="cohortForm-display">

        <div className="display-info">
          <label className="label display-label">Cohort Name:</label>
          {/* <input type="text" name="cohortName" className="input" /> */}

          <div className="input-display">
            {/* grab correct data from state from props */}
            {task.text}
          </div>

        </div>

        <div className="display-info">
          <label className="label display-label">Start Date:</label>
          <div className="input-display">
            {/* grab correct data from state from props */}
            {StartDate}
          </div>
        </div>

        <div className="display-info">
          <label className="label display-label">Graduation Date:</label>
          <div className="input-display">
            {/* grab correct data from state from props */}
            {GraduationDate}
          </div>
        </div>

      <input type="submit" className="edit" value="Edit" />
    </form>
  );
};

export default CohortDisplay;

// useEffect((props) => {
  //   console.log("props", props)

  //   // console.log("props.cohortDisplay.cohortName: ", props.cohortDisplay.cohortName )
  //   //can i set this up so the dependency array fires if cohortDisply display changes? from props?
  // }, [])


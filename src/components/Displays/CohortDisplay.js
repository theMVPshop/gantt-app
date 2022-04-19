import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import { useForm } from "react-hook-form";

import "./Displays.css"

const CohortDisplay = (props) => {
  let data = props.data.data
  console.log("data, props.data.data", data, props.data.data)
  const[task, setTask] = useState("")
  const [typeOfTask, setTypeOfTask] = useState("")
  
  //This runs on a double click of a task  (bar on calendar or column on left)
  gantt.attachEvent("onTaskDblClick", function (id, e) {

// callback func to find task that matches clicked task's id
  function getCurrentTask() {

    for (let i = 0; i < data.length; i++) {
      console.log("getCurrentTask(), data[i].id in for loop: ", data[i].id)
      if(data[i].id == id ){
        console.log("THEY MATCH!")
        setTask(data[i])
        return 
      }
    }
  }
    getCurrentTask()
    saveData()

    function saveData() {
      console.log("in saveData()")
      // console.log("task.title: ", task.title)
      //save type of task in state
      // typeOfTask = first 6 characters of id
      }
  
    // 1) 
    // decide if it's a cohort or a course
    //   likely by reading the first part of the id
    // display a modal by setCohortDisplay display to true
    // setCohortDisplay id to id
    // map over data
    // to find object where id matches id
    // figure out the use effect in 

  });

  return (
    <form className="cohortForm-display">

        <div className="display-info">
          <label className="label display-label">Cohort Name:</label>
          {/* <input type="text" name="cohortName" className="input" /> */}

          <div className="input-display">
            {/* grab correct data from state from props */}
            {/* {need default fake data so this loads up without an error; currently, it can't read "text" of undefined} */}
            {task.title}
          </div>

        </div>

        <div className="display-info">
          <label className="label display-label">Start Date:</label>
          <div className="input-display">
            {/* grab correct data from state from props */}
            {task.start_date}
          </div>
        </div>

        <div className="display-info">
          <label className="label display-label">Graduation Date:</label>
          <div className="input-display">
            {/* grab correct data from state from props */}
            {/* {task.end_date} */}
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

  //Don't need this?:
  //create state for the task to be displayed



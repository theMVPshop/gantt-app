import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import { useForm } from "react-hook-form";
import { ReactComponent as Exit } from "../../images/cancel.svg"

import "./Displays.css";

const CohortDisplay = (props) => {
let task = props.modalState.currentTask

  return (
    <form className="cohortForm-display">
        <div className="display-info">
          <label className="label display-label">Cohort Name:</label>
          
          <div className="input-display">
            {task.title}
          </div>
      </div>

      <div className="display-info">
        <label className="label display-label">Start Date:</label>
        <div className="input-display">
            {/* {task.start_date} */}
        </div>
      </div>
        <div className="display-info">
          <label className="label display-label">Graduation Date:</label>
          <div className="input-display">
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

  //Don't need this?:
  //create state for the task to be displayed


//   // console.log("props.cohortDisplay.cohortName: ", props.cohortDisplay.cohortName )
//   //can i set this up so the dependency array fires if cohortDisply display changes? from props?
// }, [])

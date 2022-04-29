import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import { useForm } from "react-hook-form";
import { ReactComponent as Exit } from "../../images/cancel.svg";

import "./Displays.css";

const CohortDisplay = (props) => {
  let task = props.modalState.currentTask;

  useEffect(() => {
    console.log(props.modalState.currentTask);
  }, [props.modalState.currentTask]);

  return (
    <div>
    <form
      className="cohortForm-display"
      style={
        props.modalState.cohortDisplay.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <Exit
        className="exit-button"
        onClick={() => {
          props.handleModalDisplayState("cohortDisplay", {
            display: false,
            id: "cohort_0",
            courseName: "PropsfakeCourseName",
          });
        }}
      ></Exit>
      <h1 className="minor-title">Cohort Info</h1>
      <div className="display-info">
        <label className="label display-label">Cohort Name:</label>

        <div className="input-display">{props.modalState.currentTask.title}</div>
      </div>

      <div className="display-info">
        <label className="label display-label">Start Date:</label>
        <div className="input-display">              
          {
            props.modalState.currentTask.start_date ? props.modalState.currentTask.start_date.toString().slice(0, 15) : ""
          }
        </div>
      </div>
      <div className="display-info">
        <label className="label display-label">Graduation Date:</label>
        <div className="input-display">
          {
            props.modalState.currentTask.end_date ? props.modalState.currentTask.end_date.toString().slice(0, 15) : ""
          }
        </div>
      </div>
      <input type="submit" className="submit" value="Edit" />
    </form>
    </div>
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

import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";

import OverviewDisplay from "./Overview.js"

import "./Displays.css";

const CohortDisplay = (props) => {

  useEffect(() => {
    console.log(props.modalState.currentTask);
  }, [props.modalState.currentTask]);

  return (
    <div
    style={
      props.modalState.cohortDisplay.display
        ? {
            display: "flex"
          }
        : { display: "none" }
    }>
      <form
        className="cohortForm-display"

      >
        <Exit
          className="exit-button"
          onClick={() => {
            props.handleModalDisplayState("cohortDisplay", {
              display: false,
              id: "cohort_0",
              courseName: "PropsfakeCourseName",
            });
            props.handleModalDisplayState("currentTask", {});
          }}
        ></Exit>
        <h1 
          className="minor-title">Cohort Info</h1>
        <div className="cohort-info">
        <div className="display-info">
          <label className="label display-label">Cohort Name:</label>

          <div className="input-display">
            {props.modalState.currentTask.title}
          </div>
        </div>

        <div className="display-info">
          <label className="label display-label">Start Date:</label>
          <div className="input-display">
            {props.modalState.currentTask.start_date
              ? props.modalState.currentTask.start_date.toString().slice(0, 15)
              : ""}
          </div>
        </div>
        <div className="display-info">
          <label className="label display-label">Graduation Date:</label>
          <div className="input-display">
            {props.modalState.currentTask.end_date
              ? props.modalState.currentTask.end_date.toString().slice(0, 15)
              : ""}
          </div>
        </div>
        </div>
        {/* this is saved as a section instead of a button
        bc we do not want it to reload, which a button will do */}
        <section
          className="edit-button"
          value="Edit"
          onClick={() => props.switchForms("cohortDisplay", "cohortEditForm")}
        >
          Edit
        </section>
          <OverviewDisplay
            modalState = {props.modalState}
            data={props.data}
            key="xyz"
          >
          </OverviewDisplay>
      </form>
      
    </div>
  );
};

export default CohortDisplay;

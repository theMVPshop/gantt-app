import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./Displays.css"

const CohortDisplay = (props) => {
  let CohortName = props.cohortDisplay
  let StartDate = "FakeStartDate"
  let GraduationDate = "FakeStartDate"

  useEffect((props) => {
    console.log("props", props)

    // console.log("props.cohortDisplay.cohortName: ", props.cohortDisplay.cohortName )
  }, [])

  return (
    <form className="cohortForm-display">

        <div className="display-info">
          <label className="label display-label">Cohort Name:</label>
          {/* <input type="text" name="cohortName" className="input" /> */}

          <div className="input-display">
            {/* grab correct data from state from props */}
            {CohortName}
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

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./Displays.css"

const CohortDisplay = (props) => {
  let CohortName = "FakeCohortName"
  let StartDate = "FakeStartDate"
  let GraduationDate = "FakeStartDate"

  return (
    <form className="cohortForm">

        <div className="info">
          <label className="label display-label">Cohort Name</label>
          {/* <input type="text" name="cohortName" className="input" /> */}

          <div className="input display">
            {/* grab correct data from state from props */}
            {CohortName}
          </div>

        </div>

        <div className="info">
          <label className="label display-label">Start Date</label>
          <div className="input display">
            {/* grab correct data from state from props */}
            {StartDate}
          </div>
        </div>

        <div className="info">
          <label className="label display-label">Graduation Date</label>
          <div className="input display">
            {/* grab correct data from state from props */}
            {GraduationDate}
          </div>
        </div>

      <input type="submit" className="submit" value="Save" />
    </form>
  );
};

export default CohortDisplay;

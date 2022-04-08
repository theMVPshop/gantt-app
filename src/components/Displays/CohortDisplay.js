import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./Displays.css"

const CohortDisplay = (props) => {
  let fakeCohortName = "FakeCohortName"
  let fakeStartDate = "FakeStartDate"
  let fakeGraduationDate = "FakeStartDate"


  return (
    <form className="cohortForm">

        <div className="info">
          <label className="label display-label">Cohort Name</label>
          {/* <input type="text" name="cohortName" className="input" /> */}

          <div className="input display">
            {/* grab correct data from state from props */}
            {fakeCohortName}
          </div>

        </div>

        <div className="info">
          <label className="label display-label">Start Date</label>
          <div className="input display">
            {/* grab correct data from state from props */}
            {fakeStartDate}
          </div>
        </div>

        <div className="info">
          <label className="label display-label">Graduation Date</label>
          <div className="input display">
            {/* grab correct data from state from props */}
            {fakeGraduationDate}
          </div>
        </div>

      <input type="submit" className="submit" value="Save" />
    </form>
  );
};

export default CohortDisplay;

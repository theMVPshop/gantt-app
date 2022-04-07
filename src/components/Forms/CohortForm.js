import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const CohortForm = (props) => {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit } = useForm();

  const formState = () => {};

  const testFunction = (data) => {
    console.log(data);
  };

  return (
    <form className="cohortForm">

        <div className="info">
          <label className="label">Cohort Name</label>
          <input type="text" name="cohortName" className="input" />
        </div>

        <div className="info">
          <label className="label">Start Date</label>
          <input type="date" name="startDate" className="input" />
        </div>

        <div className="info">
          <label className="label">Graduation Date</label>
          <input type="date" name="graduationDate" className="input" />
        </div>

      <input type="submit" className="submit" value="Save" />
    </form>
  );
};

export default CohortForm;

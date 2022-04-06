import React from "react";
import { useForm } from "react-hook-form";

const CohortForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("test");
  };

  return (
    <form
      className="edit-form"
      onSubmit={handleSubmit(onSubmit)}
      style={
        /*checks whether modal should display or not*/
        props.cohortDisplay.display ? { display: "flex" } : { display: "none" }
      }
      id="cohortForm"
    >
      <h3>Edit</h3>

      <div className="insert">
        <label htmlFor="cohortName">Cohort Name:</label>
        <input
          type="text"
          className="info"
          name="cohortName"
          {...register("cohortName")}
        ></input>
      </div>

      <div className="insert">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="text"
          className="start"
          name="startDate"
          {...register("startDate")}
        ></input>
      </div>

      <div className="insert">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="text"
          className="end"
          name="endDate"
          {...register("endDate")}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CohortForm;

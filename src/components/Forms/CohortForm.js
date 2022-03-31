import React from "react";
import "./Forms.css"



const CohortForm = () => {

  return (

  <form className="edit-form">

    <h3>Edit</h3>
    
   <div className="insert">
    <label for="cohortName">Cohort Name:</label>
    <input type="text" className="info" name="cohortName"></input>
   </div>
    
   <div className="insert">
    <label for="startDate">Start Date:</label>
    <input type="text" className="start" name="startDate"></input>
    </div>

    <div className="insert">
    <label for="endDate">End Date:</label>
    <input type="text" className="end" name="endDate"></input>
    </div>

  </form>
  )
}

export default CohortForm;

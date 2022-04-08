import React, { useState, useEffect } from "react";


const CohortForm = (props) => {
  
  const [formData, setFormData] = useState({
    cohortName: "",
    startDate: "",
    graduationDate: ""

  })

  const resetForm = () => {
    setFormData({
      cohortName: "",
      startDate: "yyyy-mm-dd",
      graduationDate: "yyyy-mm-dd"
    })
  }

  const pushFormData = () => {
    console.log(props.cohortDisplay.id);
    props.setData((prevState) => {
      let prev = { ...prevState };
      const found = prev.data.find(
        (element) => element.id === props.cohortDisplay.id
      );
      console.log(found);
      return prev;
    });
  };

  return (
    <form className="cohortForm" 
          style={
            props.cohortFormDisplay.display
              ? { display: "flex" }
              : { display: "none" }
      }
    >

        <div className="info">
          <label className="label">Cohort Name</label>
          <input 
          type="text" 
          value={formData.cohortName}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.cohortName = e.target.value;
              return prev;
            });
          }}
          name="cohortName" 
          className="input" />
        </div>

        <div className="info">
          <label className="label">Start Date</label>
          <input type="date"
          value={formData.startDate}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.startDate = e.target.value;
              return prev;
            });
          }} 
          name="startDate" 
          className="input" />
        </div>

        <div className="info">
          <label className="label">Graduation Date</label>
          <input 
          type="date"
          value={formData.graduationDate}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.graduationDate = e.target.value;
              return prev;
            });
          }}  
          name="graduationDate" 
          className="input" />
        </div>

      <input type="submit" className="submit" value="Save" />
    </form>
  );
};

export default CohortForm;

import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";


const CohortForm = (props) => {
  
  const [formData, setFormData] = useState({
    id: 0,
    text: "",
    start_date: "yyyy-mm-dd",
    end_date: "yyyy-mm-dd"

  })

  const resetForm = () => {
    setFormData({
      text: "",
      start_date: "yyyy-mm-dd",
      end_date: "yyyy-mm-dd"
    })
  }

  const pushFormData = () => {
    formData.id = 6
    gantt.addTask(formData)
    // props.setData((prevState) => {
    //   let prev = { ...prevState };
    //   const found = prev.data.find(
    //     (element) => element.id === props.cohortDisplay.id
    //   );
    //   console.log(found);
    //   return prev;
    // });
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
          placeholder="Name"
          value={formData.text}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.text = e.target.value;
              return prev;
            });
          }}
          name="text" 
          className="input" />
        </div>

        <div className="info">
          <label className="label">Start Date</label>
          <input type="date"
          value={formData.start_date}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.start_date = e.target.value;
              return prev;
            });
          }} 
          name="start_date" 
          className="input" />
        </div>

        <div className="info">
          <label className="label">Graduation Date</label>
          <input 
          type="date"
          value={formData.end_date}
          onChange={(e) => {
            setFormData((prevState) => {
              let prev = { ...prevState }
              prev.end_date = e.target.value;
              return prev;
            });
          }}  
          name="end_date" 
          className="input" />
        </div>

      <input type="submit" className="submit" value="Save"
      onClick = {pushFormData} />
    </form>
  );
};

export default CohortForm;

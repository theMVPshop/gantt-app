import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";

// copied over code from CohortForm***
const CohortEdit = (props) => {
  // console.log("CohortEdit Props Data:", props.data.data)
  console.log("props here---", props.data.data)

  const [editedData, setEditedData] = useState({
    id: 0,
    text: "",
    start_date: "yyyy-mm-dd",
    end_date: "yyyy-mm-dd"

  })

  const resetForm = () => {
    setEditedData({
      text: "",
      start_date: "yyyy-mm-dd",
      end_date: "yyyy-mm-dd"
    })
  }

  gantt.attachEvent("onTaskDblClick", function(id,e){
    //any custom logic here
    console.log("double click occured! ID - ", id)
    return true;
// gantt.attachEvent("onTaskDblClick", function(id,e){
//     const clickedCohortID = id;
//     const info = props.data.data.
//     // for (let i = 0; i < props.data.data.length; i++) {
//     //   console.log("this is i", i)
//     // }
//     return;
  });

  const pushEditedData = () => {
  // from cohort form  ************
  // gantt.addTask(formData);
  // props.updateStateData();
  // props.setCohortFormDisplay({ display: false });

  };

  return (
    <form>
      {/* className="cohortForm" 
          style={
            props.cohortFormDisplay.display
              ? { display: "flex" }
              : { display: "none" }
      } */}
        <div className="info">
          <label className="label">Cohort Name</label>
          <input 
          type="text" 
          placeholder="Name"
          value={editedData.text}
          onChange={(e) => {
            setEditedData((prevState) => {
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
          value={editedData.start_date}
          onChange={(e) => {
            setEditedData((prevState) => {
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
          value={editedData.end_date}
          onChange={(e) => {
            setEditedData((prevState) => {
              let prev = { ...prevState }
              prev.end_date = e.target.value;
              return prev;
            });
          }}  
          name="end_date" 
          className="input" />
        </div>

      <input type="submit" className="submit" value="Save"
      onClick = {pushEditedData} />
    </form>
  );
};

export default CohortEdit;

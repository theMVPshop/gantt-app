import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
// import "../Gantt/Gantt.css";

const CohortForm = (props) => {
  const [formData, setFormData] = useState({
    id: "cohort_0",
    title: "",
    start_date: "yyyy-mm-dd",
    end_date: "yyyy-mm-dd",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      start_date: "yyyy-mm-dd",
      end_date: "yyyy-mm-dd",
    });
  };

  const pushFormData = () => {
    var cohortCounter = 1;
    for (let i = 0; i < props.data.data.length; i++) {
      let cohortIDArray = props.data.data[i].id.split("_");
      if (cohortIDArray[0] === "cohort") {
        cohortCounter++;
        console.log(cohortCounter);
      }
    }
    formData.id = `cohort_${cohortCounter}`;
    console.log(formData);
    props.addTask(formData);
    props.setCohortFormDisplay({ display: false });
  };

  return (
    <div>
      <form
        className="cohortForm"
        style={
          props.modalState.addCohortForm.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div className="title-div">
          <Exit
            className="exit-button"
            onClick={() => {
              console.log(
                "add cohort form state",
                props.modalState.addCohortForm
              );
              props.handleModalDisplayState("addCohortForm", {
                display: false,
                id: "cohort_0",
              });
            }}
          ></Exit>
          <h1 className="minor-title">Add Cohort</h1>
        </div>
        <div className="info">
          <label className="label">Cohort Name</label>
          <input
            type="title"
            placeholder="Name"
            value={formData.title}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.title = e.target.value;
                return prev;
              });
            }}
          />
        </div>
        <div className="info">
          <label className="label">Cohort Name</label>
          <input
            type="title"
            placeholder="Name"
            value={formData.title}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.title = e.target.value;
                return prev;
              });
            }}
            name="title"
            className="input"
          />
        </div>

        <div className="info">
          <label className="label">Start Date</label>
          <input
            type="date"
            value={formData.start_date}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.start_date = e.target.value;
                return prev;
              });
            }}
            name="start_date"
            className="input"
          />
        </div>

        <div className="info">
          <label className="label">Graduation Date</label>
          <input
            type="date"
            value={formData.end_date}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.end_date = e.target.value;
                return prev;
              });
            }}
            name="end_date"
            className="input"
          />
        </div>

        <input
          type="submit"
          className="submit"
          value="Save"
          onClick={pushFormData}
        />
      </form>
    </div>
  );
};

export default CohortForm;

import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import { useForm } from "react-hook-form"

import axios from "axios";

const url = "http://localhost:4000/tasks";

const CohortForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const requiredFields ={
  cohortName: { required: "Cohort Name is required (this can be changed later)"},
  startDate: { required: "Start Date is required (this can be changed later)"},
  graduationDate: { required: "Graduation Date is required (this can be changed later)"}
}

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
    props.handleModalDisplayState("addCohortForm", {
      display: false,
      id: "cohort_0",
    });
  };

  const pushFormData = () => {
    var cohortCounter = 1;
    // if (formData.title == "default value"){
      
    // }
    var idArray = [];
    for (let i = 0; i < props.data.data.length; i++) {
      let cohortIDArray = props.data.data[i].id.split("_");
      if (cohortIDArray[0] === "cohort") {
        cohortCounter++;
        idArray.push(cohortIDArray[1]);
      }
    }
    let newID = Math.max(...idArray) + 1;
    formData.id = `cohort_${newID}`;
    axios
      .post(url, formData)
      .then((res) => {
        if (res.status === 200) {
          props.customAddTask(formData);
          resetForm();
        }
      })
      .catch((err) => console.log("there was an error", err));
    gantt.open(props.modalState.addCohortForm.id); //forces open the parent task
  };

  return (
    <div>
      <form
        className="cohortForm"
        onSubmit={handleSubmit()}
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
          <label className="label">Cohort Name*</label>
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
            // {...register("title", requiredFields.cohortName)}
          />
        </div>
        <small className="text-danger">

          {/* if titleErrors state is true display here */}
          {/* {errors?.cohortName && errors.cohortName.message} */}
        </small>

        <div className="info">
          <label className="label">Start Date*</label>
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
            // {...register("startDate", requiredFields.startDate)}
          />
        </div>
        <small className="text-danger">
          {errors?.startDate && errors.startDate.message}
        </small>

        <div className="info">
          <label className="label">Graduation Date*</label>
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
            // {...register("graduationDate", requiredFields.graduationDate)}
          />
        </div>
        <small className="text-danger">
          {errors?.graduationDate && errors.graduationDate.message}
        </small>
        <h6 className="required">
          <em>*required</em>
        </h6>

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

import { gantt } from "dhtmlx-gantt";
import React, { useState } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import { useForm } from "react-hook-form";

import axios from "axios";

const url = "https://gantt-server.herokuapp.com/tasks/";

const CohortForm = (props) => {
  //something about this is keeping it from refreshing
  const { handleSubmit } = useForm();

  const requiredFields = {
    cohortName: "Cohort Name is required (this can be changed later)",
    startDate: "Start Date is required (this can be changed later)",
    graduationDate: "Graduation Date is required (this can be changed later)",
  };

  const [formData, setFormData] = useState({
    id: "cohort_0",
    title: "",
    start_date: "",
    end_date: "",
    title_error: false,
    start_date_error: false,
    end_date_error: false,
  });

  const resetForm = () => {
    // props.setLoading("false")
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
   //props.fetchData actually starts the spinner
    props.fetchData()

    props.pullData();
    if (formData.title === "") {
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.title_error = true;
        return prev;
      });
      return;
    }

    if (formData.start_date === "yyyy-mm-dd" || formData.start_date === "") {
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.start_date_error = true;
        return prev;
      });
      return;
    }

    if (formData.end_date === "" || formData.end_date === "yyyy-mm-dd") {
      console.log("no end date");
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.end_date_error = true;
        return prev;
      });
      return;
    }

    var idArray = [];
    for (let i = 0; i < props.data.data.length; i++) {
      if (props.data.data[0].id) {
        let cohortIDArray = props.data.data[i].id.split("_");
        if (cohortIDArray[0] === "cohort") {
          idArray.push(cohortIDArray[1]);
        }
      } else idArray.push("1");
    }
    if (idArray.length > 0) {
      //protects against 'course_infinity" id being created
      const newID = Math.max(...idArray) + 1;
      formData.id = `cohort_${newID}`;
    } else {
      formData.id = "cohort_1";
    }

    axios
      .post(url, formData)
      .then((res) => {
        if (res.status === 200) {
          props.customAddTask(formData);
          // //is resetForm redundant, because when gantt.serialize happens, the page refreshes, anyway, reseting state?
          resetForm();
  
        }
      })
      .catch((err) => console.log("there was an error", err));
        gantt.open(props.modalState.addCohortForm.id); //forces open the parent task
        props.setLoading("false")// if there's an error response, shut off the spinner
  };

  return (
    <div
      style={
        props.modalState.addCohortForm.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form className="cohortForm" onSubmit={handleSubmit()}>
        <div className="title-div">
          <Exit
            className="exit-button"
            onClick={() => {
              resetForm();
            }}
          ></Exit>
          <h1 className="minor-title">Add Cohort</h1>
        </div>
        <div className="minor-info">
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
          />
        </div>
        <small className="text-danger">
          {/* if titleErrors state is true display here */}
          {formData.title_error && requiredFields.cohortName}
        </small>

        <div className="minor-info">
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
          {formData.start_date_error && requiredFields.startDate}
        </small>

        <div className="minor-info">
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
          {formData.end_date_error && requiredFields.graduationDate}
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

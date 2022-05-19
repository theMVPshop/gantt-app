import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";
const url = "http://localhost:4000/tasks";

const CohortEdit = (props) => {

  const requiredFields ={
    cohortName:  "Cohort Name is required (this can be changed later)",
    startDate: "Start Date is required (this can be changed later)",
    graduationDate: "Graduation Date is required (this can be changed later)",
  }
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const formatDateUp = (date) => {
    let translatedDate = date.slice(0, 10);
    console.log(translatedDate);
    return translatedDate;
  };

  const [formData, setFormData] = useState({
    id: "cohort_0",
    title: "",
    start_date: formatDate(props.modalState.currentTask.start_date),
    end_date: formatDate(props.modalState.currentTask.end_date),
    title_error: false,
    start_date_error: false,
    end_date_error: false,
  });

  useEffect(() => {
    setFormData({
      id: props.modalState.currentTask.id,
      title: props.modalState.currentTask.title,
      start_date: formatDate(props.modalState.currentTask.start_date),
      end_date: formatDate(props.modalState.currentTask.end_date),
    });
  }, [props.modalState.currentTask]);

  const resetForm = () => {
    setFormData({
      title: "",
      start_date: "yyyy-mm-dd",
      end_date: "yyyy-mm-dd",
    });
  };

  const pushFormData = () => {
    if (formData.title == "" ){
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.title_error = true;
        return prev;
      });
      return
    }
    
    if (formData.start_date == "yyyy-mm-dd" || formData.start_date == ''){
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.start_date_error = true;
        return prev;
      });
      return
    }

    if (formData.end_date == "" || formData.end_date == 'yyyy-mm-dd'){
      console.log("no end date")
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.end_date_error = true;
        return prev;
      });
      return
    }

    console.log("when pushing cohort edit, formData.start_date, formData.end_date:", formData.start_date, formData.end_date)
    var copy = formData;
    copy.start_date = formatDateUp(formData.start_date); //translating date to the way the server needs
    copy.end_date = formatDateUp(formData.end_date); //translating date to the way the server needs

    axios
      .put(`${url}/${props.modalState.currentTask.id}`, copy)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          copy.start_date = new Date().toISOString(formData.start_date); // translating date to the way gantt needs
          copy.end_date = new Date().toISOString(formData.end_date); // translating date to the way gantt needs
          props.customEditTask(copy.id, copy);
          resetForm();
        }
      })
      .catch((err) => console.log("there was an error", err));
    gantt.open(props.modalState.addCohortForm.id); //forces open the parent task
  };

  useEffect(() => {
    setFormData({
      title: props.modalState.currentTask.title,
      start_date: formatDate(props.modalState.currentTask.start_date),
      end_date: formatDate(props.modalState.currentTask.end_date),
    });
  }, [props.modalState.currentTask]);

  return (
    <div>
      <form
        className="cohortEdit"
        style={
          props.modalState.cohortEditForm.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div className="title-div">
          <Exit
            className="edit-exit exit-button"
            onClick={() => {
              console.log("display", props.modalState.cohortEditForm.display);
              const copy = props.modalState;
              copy.cohortEditForm.display = !copy.cohortEditForm.display;
              props.handleModalDisplayState(copy);
            }}
          ></Exit>
          <h1 className="minor-title">Edit Cohort Info</h1>
        </div>
        <div className="edit-info">
          <label className="label">Cohort Name</label>
          <input
            type="text"
            placeholder="Name"
            value={formData.title}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.title = e.target.value;
                return prev;
              });
            }}
            name="text"
            className="input"
          />
          
        </div>
        <small className="text-danger edit-danger">
          {/* if titleErrors state is true display here */}
          {formData.title_error && requiredFields.cohortName}
        </small>
        

        <div className="edit-info">
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
        <small className="text-danger edit-danger">
        {formData.start_date_error && requiredFields.startDate}
        </small>

        <div className="edit-info">
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
        <small className="text-danger edit-danger">
        {formData.end_date_error && requiredFields.graduationDate}
        </small>

        <input
          // type="submit"
          className="submit"
          value="Confirm Changes"
          onClick={pushFormData}
        />
      </form>
    </div>
  );
};

export default CohortEdit;

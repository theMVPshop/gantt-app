import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";

const url = "https://gantt-server.herokuapp.com/tasks/";

const CohortEdit = (props) => {

  const { handleSubmit } = useForm();

  const requiredFields = {
    cohortName: "Cohort Name is required (this can be changed later)",
    startDate: "Start Date is required (this can be changed later)",
    graduationDate: "Graduation Date is required (this can be changed later)",
  };

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
    return translatedDate;
  };


  const [formData, setFormData] = useState({
    id: "cohort_0",
    title: "",
    start_date: formatDate(props.modalState.currentTask.start_date),
    end_date: formatDate(props.modalState.currentTask.end_date),
  });

  const [errorData, setErrorData] = useState({
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

  // useEffect(() => {
  //   console.log("formData changed: ", formData.id)
  // }, [formData]);

  //if you x out of the modal, this clears validation errors
  const resetErrorData = () => {
    console.log("resetErrorData");
    setErrorData({
      title_error: false,
      start_date_error: false,
      end_date_error: false,
    });
  };

  useEffect(() => {
    gantt.scrollTo(props.scrollPos, null)
    }, [props.scrollPos])

  const validateInput = (e) => {
    if (formData.title === "") {
      e.preventDefault();
      setErrorData((prevState) => {
        let prev = { ...prevState };
        prev.title_error = true;
        return prev;
      });
      return;
    }
    if (formData.start_date === "yyyy-mm-dd" || formData.start_date === "") {
      e.preventDefault();
      setErrorData((prevState) => {
        let prev = { ...prevState };
        prev.start_date_error = true;
        return prev;
      });
      return;
    }

    if (formData.end_date === "" || formData.end_date === "yyyy-mm-dd") {
      e.preventDefault();

      setErrorData((prevState) => {
        let prev = { ...prevState };
        prev.end_date_error = true;
        return prev;
      });
      return;
    }
    //props.fetchData starts the spinner
    props.fetchData();

    pushFormData(e);
  };

  const pushFormData = (e) => {
    var copy = formData;
    // adds the data to the database
    axios
      .put(`${url}/${props.modalState.currentTask.id}`, copy)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          //adds the data to update Gantt
          props.customEditTask(formData.id, formData);

          //closes the modal
          const copy = props.modalState;
          copy.cohortEditForm.display = !copy.cohortEditForm.display;
          props.handleModalDisplayState(copy);

          //turn off the spinner
          props.setLoading(false);

        }
      })
      .catch((err) => {
        props.setLoading(false);
        console.log("formData.start_date: ",formData.start_date )
        console.log("there was an error in cohortEdit", err);
      });
    gantt.open(props.modalState.addCohortForm.id); //forces open the parent task //I don't think this does that. 
  };


  useEffect(() => {
    setFormData({
      id: props.modalState.currentTask.id,
      title: props.modalState.currentTask.title,
      start_date: formatDate(props.modalState.currentTask.start_date),
      end_date: formatDate(props.modalState.currentTask.end_date),
    });
  
  }, [props.modalState.currentTask]);

  return (
    <div
      style={
        props.modalState.cohortEditForm.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form 
        className="cohortEdit" 
        onSubmit={handleSubmit()}
      >
        <div className="title-div">
          <Exit
            className="edit-exit exit-button"
            onClick={() => {
              console.log("display", props.modalState.cohortEditForm.display);
              const copy = props.modalState;
              copy.cohortEditForm.display = !copy.cohortEditForm.display;
              props.handleModalDisplayState(copy);
              resetErrorData();
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
        <small
          className="text-danger edit-danger"
          style={
            errorData.title_error ? { display: "flex" } : { display: "none" }
          }
        >
          {requiredFields.cohortName}
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
          {errorData.start_date_error && requiredFields.startDate}
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
          {errorData.end_date_error && requiredFields.graduationDate}
        </small>
        <button 
          // type="button"

          className="submit" 
          onClick={validateInput}
        >
          Confirm Changes
        </button>
        {/* <input
          type="submit"
          className="submit"
          value="Save"
          onClick={validateInput}
        /> */}
      </form>
    </div>
  );
};

export default CohortEdit;

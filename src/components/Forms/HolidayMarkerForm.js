import { gantt } from "dhtmlx-gantt";
import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import { useForm } from "react-hook-form";

import axios from "axios";

const url = "https://gantt-server.herokuapp.com/holidays/";

const HolidayMarkerForm = (props) => {
  //something about this is keeping it from refreshing
  const { handleSubmit } = useForm();

  useEffect(() => {
    axios
    .get(url)
    .then((res) => {
      res.data.forEach((obj) => {

        if (obj.end_date === null) {
          gantt.addMarker({
            start_date: new Date(obj.start_date),
            css: "holiday",
            text: obj.text,
            title: obj.start_date.slice(0, 10)
          });
        } else if (obj.end_date != null) {
          gantt.addMarker({
            start_date: new Date(obj.start_date),
            end_date: new Date(obj.end_date),
            css: "holiday",
            text: obj.text,
            title: `${obj.start_date.slice(0, 10)} to ${obj.end_date.slice(0, 10)}`
          });
        }
      });
    })
    .catch((err) => console.log("error", err));
  })

  const requiredFields = {
    holidayName: "Holiday Name is required",
    startDate: "Start Date is required"
  };

  const [formData, setFormData] = useState({
    text: "",
    start_date: "",
    end_date: "",
    name_error: false,
    start_date_error: false
  });

  const resetForm = () => {
    setFormData({
      text: "",
      start_date: "yyyy-mm-dd",
      end_date: "yyyy-mm-dd",
    });
    props.setHolidayModalState(false);
  };

  const addHolidayMarker = () => {
    console.log("click! add holiday button")

    gantt.addMarker({
      start_date: new Date(formData.start_date),
      end_date: new Date(formData.end_date),
      css: "holiday",
      text: formData.text,
      title: formData.start_date
    });
  }

  const pushFormData = () => {
    props.fetchData()
    
    if (formData.name === "") {
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.name_error = true;
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

    let payload;

    if (formData.end_date === "yyyy-mm-dd" || formData.end_date === "") {
      payload = {
        text: formData.text,
        start_date: formData.start_date
      }
    }

    else {
      payload = {
        text: formData.text,
        start_date: formData.start_date,
        end_date: formData.end_date
      }
    }

    axios
      .post(url, payload)
      .then((res) => {
        if (res.status === 200) {
          addHolidayMarker();
          resetForm();
          props.setLoading(false);
        }
      })
      .catch((err) => console.log("there was an error", err));
        // props.setLoading(false)
  };

  return (
    <div
      style={
        props.holidayModalState
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
          <h1 className="minor-title">Add Holiday</h1>
        </div>
        <div className="minor-info">
          <label className="label">Holiday Name*</label>
          <input
            type="title"
            placeholder="Name"
            value={formData.text}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.text = e.target.value;
                return prev;
              });
            }}
            name="name"
            className="input"
          />
        </div>
        <small className="text-danger">
          {formData.text_error && requiredFields.holidayName}
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
          />
        </div>
        <small className="text-danger">
          {formData.start_date_error && requiredFields.startDate}
        </small>

        <div className="minor-info">
          <label className="label">End Date</label>
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

export default HolidayMarkerForm;

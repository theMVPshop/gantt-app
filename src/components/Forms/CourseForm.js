import { gantt } from "dhtmlx-gantt";
import React, { useState } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";
const url = "https://gantt-server.herokuapp.com/tasks/";

const CourseForm = (props) => {
  const requiredFields = {
    cohortName: "Cohort Name is required (this can be changed later)",
    startDate: "Start Date is required (this can be changed later)",
    endDate: "End Date is required (this can be changed later)",
  };

  const [formData, setFormData] = useState({
    title: "",
    zoom_link: "",
    textbook: "",
    hubspot_ticket: "",
    rocketchat: "",
    instructor: "",
    teacher_assistant: "",
    location: "",
    day_of_week: "",
    mode: "",
    start_date: "YYYY-MM-DD",
    end_date: "YYYY-MM-DD",
    student_number_start: 0,
    student_number_end: 0,
    active_status: true,
    id: "cohort_0",
    parent: "cohort_0",
    title_error: false,
    start_date_error: false,
    end_date_error: false,
  });

  //function that resets formData back to default
  const resetForm = () => {
    setFormData({
      title: "",
      zoom_link: "",
      textbook: "",
      hubspot_ticket: "",
      rocketchat: "",
      instructor: "",
      teacher_assistant: "",
      location: "",
      day_of_week: "",
      mode: "",
      start_date: "",
      end_date: "",
      student_number_start: 0,
      student_number_end: 0,
      active_status: true,
      id: "cohort_0",
      parent: "cohort_0",
      title_error: false,
      start_date_error: false,
      end_date_error: false,
    });
    props.handleModalDisplayState("addCourseForm", {
      display: false,
      id: "course_0",
    });
    document.getElementById("courseForm").reset();
  };

  //This function first checks for required fields
  //then, if required fields are filled in, pushes data to the db
  const pushFormData = () => {

    if (formData.title === "") {
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.title_error = true;
        return prev;
      });
      return;
    }

    if (formData.start_date === "YYYY-MM-DD" || formData.start_date === "") {
        setFormData((prevState) => {
        let prev = { ...prevState };
        prev.start_date_error = true;
        return prev;
      });
      return;
    }

    if (formData.end_date === "" || formData.end_date === "yyyy-mm-dd") {
      setFormData((prevState) => {
        let prev = { ...prevState };
        prev.end_date_error = true;
        return prev;
      });
      return;
    }

    //props.fetchData starts the spinner
    props.fetchData()

    var idArray = [];
    for (let i = 0; i < props.data.data.length; i++) {
      let courseIDArray = props.data.data[i].id.split("_");
      if (courseIDArray[0] === "course") {
        idArray.push(courseIDArray[1]);
      }
    }

    if (idArray.length > 0) {
      const newID = Math.max(...idArray) + 1;
      formData.id = `course_${newID}`;
    } else {
      formData.id = "course_1";
    }

    formData.parent = props.modalState.addCourseForm.id;
    axios
      .post(url, formData)
      .then((res) => {
        if (res.status === 200) {
          props.customAddTask(formData);
          setTimeout(() => {props.setLoading(false)})
          resetForm();

        }
      })
      .catch((err) => {
        props.setLoading(false)
        console.log("there was an error", err)});
        gantt.open(props.courseDisplay.id); //forces open the parent task
        props.handleModalDisplayState("addCourseForm", {
      display: false,
      id: "course_0",
    }); //turning modal display to none and resetting the parent task id passed as a prop
    props.setLoading(false)
  };

  return (
    <div
      style={
        props.modalState.addCourseForm.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form id="courseForm">
        <Exit
          className="exit-button"
          onClick={() => {
            resetForm();
          }}
        ></Exit>
        <h1 className="minor-title">Add Course</h1>
        <div className="group-container">
          <div className="group">
            <div className="info">
              <label className="label">Course Name*</label>
              <input
                type="title"
                value={formData.title}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.title = e.target.value;
                    return prev;
                  });
                }}
                name="courseNum"
                className="input"
              />
            </div>
            <small className="text-danger">
              {formData.title_error && requiredFields.cohortName}
            </small>

            <div className="info">
              <label className="label">Zoom Link</label>
              <input
                type="text"
                name="zoomLink"
                className="input"
                value={formData.zoom_link}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.zoom_link = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="info">
              <label className="label">Textbook</label>
              <input
                type="text"
                name="textbook"
                className="input"
                value={formData.textbook}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.textbook = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="info">
              <label className="label">Hubspot Ticket</label>
              <input
                type="text"
                name="hubSpotTicket"
                className="input"
                value={formData.hubspot_ticket}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.hubspot_ticket = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="info">
              <label className="label">Rocket Chat</label>
              <input
                type="text"
                name="rocketChat"
                className="input"
                value={formData.rocketchat}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.rocketchat = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>
            
            <div className="info">
              <label className="label">Instructor</label>
              <input
                type="text"
                name="instructor"
                className="input"
                value={formData.instructor}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.instructor = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>
            <div className="info">
              <label className="label">Teacher Assistant</label>
              <input
                type="text"
                name="teacherAssistant"
                className="input"
                value={formData.teacher_assistant}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.teacher_assistant = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="info">
              <label className="label">Location</label>
              <select
                className="input"
                value={formData.location}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.location = e.target.value;
                    return prev;
                  });
                }}
              >
                <option>Location</option>
                <option value="ACA - St. Edwards">ACA - St. Edwards</option>
                <option value="LCA">LCA</option>
                <option value="ACA - Online-North">ACA - Online-North</option>
                <option value="TTCU">TTCU</option>
                <option value="TTCU - Marble Falls">TTCU - Marble Falls</option>
              </select>
            </div>
          </div>

          <div className="group">
            <div className="info">
              <label className="label">Days</label>
              <select
                className="input"
                value={formData.day_of_week}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.day_of_week = e.target.value;
                    return prev;
                  });
                }}
              >
                <option>Days</option>
                <option value="Mon/Wed">Mon/Wed</option>
                <option value="Tues/Thurs">Tues/Thurs</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>

            <div className="info">
              <label className="label">Mode</label>
              <select
                className="input"
                value={formData.mode}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.mode = e.target.value;
                    return prev;
                  });
                }}
              >
                <option>Mode</option>
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
              </select>
            </div>

            <div className="info">
              <label className="label">Start Date*</label>
              <input
                type="date"
                name="start_date"
                className="input"
                value={formData.start_date}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.start_date = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>
            <small className="text-danger">
              {formData.start_date_error && requiredFields.startDate}
            </small>

            <div className="info">
              <label className="label">End Date*</label>
              <input
                type="date"
                name="end_date"
                className="input"
                value={formData.end_date}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.end_date = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>
            <small className="text-danger">
              {formData.end_date_error && requiredFields.endDate}
            </small>

            <div className="info">
              <label className="label">
                Number of <br /> Students Starting
              </label>
              <input
                type="number"
                name="studentNumStart"
                className="input"
                value={formData.student_number_start}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.student_number_start = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="info">
              <label className="label">
                Number of <br /> Students Ending
              </label>
              <input
                type="number"
                name="studentNumEnd"
                className="input"
                value={formData.student_number_end}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.student_number_end = e.target.value;
                    return prev;
                  });
                }}
              />
            </div>

            <div className="radio-info">
              <label className="label">Status</label>
              <div className="radio-group">
              <input
                type="radio"
                className="radio"
                name="activeStatus"
                checked={formData.active_status === true}
                onChange={(e) => {
                    setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = true;
                    return prev;
                  });
                }}
              /> <span className="radio-placeHolder">Active</span>
              <input
                type="radio"
                className="radio"
                name="activeStatus"
                checked={formData.active_status === false}
                onChange={(e) => {
                    setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = false;
                    return prev;
                  });
                }}
              /> <span className="radio-placeHolder">Inactive</span>
            </div>
            
            </div>
          </div>
        </div>
        <h6>
          <em>*required</em>
        </h6>

        <section className="submit" onClick={pushFormData}>
          Save
        </section>
      </form>
    </div>
  );
};

export default CourseForm;

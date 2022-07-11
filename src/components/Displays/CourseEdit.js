import { ReactComponent as Exit } from "../../images/cancel.svg";
import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import axios from "axios";
const url = "https://gantt-server.herokuapp.com/tasks/";

const CourseEdit = (props) => {
  const requiredFields = {
    cohortName: "Cohort Name is required (this can be changed later)",
    startDate: "Start Date is required (this can be changed later)",
    graduationDate: "End Date is required (this can be changed later)",
  };

  const [errorData, setErrorData] = useState({
    title_error: false,
    start_date_error: false,
    end_date_error: false,
  });

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
    // props.fetchData() starts the spinner
    props.fetchData()
    
    pushFormData();
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
    title: "",
    course_link: "",
    textbook: "",
    hubspot_ticket: "",
    rocketchat: "",
    instructor: "",
    teacher_assistant: "",
    location: "",
    day_of_week: "",
    mode: "",
    start_date: formatDate(props.modalState.currentTask.start_date),
    end_date: formatDate(props.modalState.currentTask.end_date),
    student_number_start: 0,
    student_number_end: 0,
    active_status: true,
    id: "course_0",
    parent: "cohort_0",
  });

  useEffect(() => {
    setFormData({
      title: props.modalState.currentTask.title,
      course_link: props.modalState.currentTask.course_link,
      textbook: props.modalState.currentTask.textbook,
      hubspot_ticket: props.modalState.currentTask.hubspot_ticket,
      rocketchat: props.modalState.currentTask.rocketchat,
      instructor: props.modalState.currentTask.instructor,
      teacher_assistant: props.modalState.currentTask.teacher_assistant,
      location: props.modalState.currentTask.location,
      day_of_week: props.modalState.currentTask.day_of_week,
      mode: props.modalState.currentTask.mode,
      start_date: formatDate(props.modalState.currentTask.start_date),
      end_date: formatDate(props.modalState.currentTask.end_date),
      student_number_start: props.modalState.currentTask.student_number_start,
      student_number_end: props.modalState.currentTask.student_number_end,
      active_status: props.modalState.currentTask.active_status,
      id: props.modalState.currentTask.id,
      parent: props.modalState.currentTask.parent,
    });
  }, [props.modalState.currentTask]);

  const pushFormData = () => {
    let copy = formData;
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
        }
      })
      .catch((err) => {
        props.setLoading(false)
        console.log("there was an error", err)});
        gantt.open(props.modalState.addCohortForm.id); //forces open the parent task
        // props.setLoading(false)
  };

  return (
    <div
      style={
        props.modalState.courseEditForm.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form className="courseEdit">
        <Exit
          className="exit-button"
          onClick={() => {
            props.handleModalDisplayState("courseEditForm", {
              display: false,
              id: "course_0",
            });
          }}
        ></Exit>
        <h1 className="minor-title">Edit Course Info</h1>
        <div className="group-container">
          <div className="group">
            <div className="info">
              <label className="label">Course Name</label>
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
            <small className="text-danger edit-danger">
              {errorData.title_error && requiredFields.cohortName}
            </small>

            <div className="info">
              <label className="label">Course Link</label>
              <input
                type="text"
                name="courseLink"
                className="input"
                value={formData.course_link}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.course_link = e.target.value;
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
                    console.log("this is the prev .day_of_week state: ", prev.day_of_week)
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
              <label className="label">Start Date</label>
              <input
                type="date"
                name="startDate"
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
            <small className="text-danger edit-danger">
              {errorData.start_date_error && requiredFields.startDate}
            </small>

            <div className="info">
              <label className="label">End Date</label>
              <input
                type="date"
                name="endDate"
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
            <small className="text-danger edit-danger">
              {errorData.end_date_error && requiredFields.graduationDate}
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

            {/* <div className="info">
              <label className="label">Active Status</label>
              <input
                type="checkbox"
                className="input"
                checked={formData.active_status}
                onChange={(e) => {
                  setFormData((prevState) => {
                    // console.log(
                    //   "formData.active_status: ",
                    //   formData.active_status,
                    //   "active checkbox e.target.checked: ",
                    //   e.target.checked
                    // );
                    let prev = { ...prevState };
                    prev.active_status = e.target.checked;
                    return prev;
                  });
                }}
              />
            </div> */}

            <div className="info">
              <label className="label">Status</label>
              <input
                type="radio"
                className="radio"
                name="activeStatus"
                checked={formData.active_status}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = true;
                    return prev;
                  });
                }}
              /> Active
              <input
                type="radio"
                className="radio"
                name="activeStatus"
                checked={!formData.active_status}
                onChange={(e) => {
                    setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = false;
                    return prev;
                  });
                }}
              /> Inactive
            </div>

          </div>
        </div>
        <button className="submit"  onClick={validateInput}>
          Confirm Changes
        </button>
      </form>
    </div>
  );
};

export default CourseEdit;

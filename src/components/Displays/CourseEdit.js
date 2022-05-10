import { ReactComponent as Exit } from "../../images/cancel.svg";
import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import axios from "axios";
const url = "http://localhost:4000/tasks";

const CourseEdit = (props) => {
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    // console.log("DATE IN COURSE EDIT", [year, month, day].join("-"));

    return [year, month, day].join("-");
  };

  const formatDateUp = (date) => {
    let translatedDate = date.slice(0, 10);
    console.log(translatedDate);
    return translatedDate;
  };

  const [formData, setFormData] = useState({
    title: "",
    course_link: "",
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
    active_status: false,
    id: "course_0",
    parent: "cohort_0",
  });

  // const createDate = () => {
  //   //varaible to create the new date
  //   // let origDate = props.modalState.currentTask.start_date
  //   let origDate = ""
  //   //variable to hold pieces of the date that we want to display
  //   let displayDate = `${origDate.getMonth()+1}/${origDate.getDate()}/${origDate.getFullYear()}`.toString()
  //   return displayDate
  // }
  useEffect(() => {
    let spreadFormData = { ...props.modalState.currentTask };
    // console.log("useEffect CourseEdit props.modalState.currentTask.start_date: ", props.modalState.currentTask.start_date)
    // console.log("!!!!!DATE: ", `${origDate.getMonth()+1}/${origDate.getDate()}/${origDate.getFullYear()}`.toString())

    // console.log(spreadFormData);
    setFormData({
      title: props.modalState.currentTask.title,
      course_link: props.modalState.currentTask.course_link,
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
    copy.start_date = formatDateUp(formData.start_date);
    copy.end_date = formatDateUp(formData.end_date);
    axios
      .put(`${url}/${props.modalState.currentTask.id}`, copy)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          props.customEditTask(copy.id, copy);
        }
      })
      .catch((err) => console.log("there was an error", err));
    gantt.open(props.modalState.addCohortForm.id); //forces open the parent task
  };

  return (
    <div>
      <form
        className="courseEdit"
        //may need/ want to change this, bc this is courseDisplay.display is for the courseForm
        style={
          props.modalState.courseEditForm.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
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
                <option value="acaStEdwards">ACA - St. Edwards</option>
                <option value="lca">LCA</option>
                <option value="acaOnlineNorth">ACA - Online-North</option>
                <option value="ttcu">TTCU</option>
                <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
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
                <option value="partTimeMonWed">Mon/Wed</option>
                <option value="partTimeTuesThurs">Tues/Thurs</option>
                <option value="fullTime">Full Time</option>
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
                <option value="online">Online</option>
                <option value="inPerson">In-Person</option>
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

            <div className="info">
              <label className="label">Active Status</label>
              <input
                type="checkbox"
                className="input"
                value={formData.active_status}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = e.target.value;
                    return prev;
                  });
                }}
              />
              <span className="slider round"></span>
            </div>
          </div>
        </div>
        <button className="submit" onClick={pushFormData}>
          Confirm Changes
        </button>
      </form>
    </div>
  );
};

export default CourseEdit;

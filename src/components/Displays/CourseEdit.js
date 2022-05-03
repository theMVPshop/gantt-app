import { ReactComponent as Exit } from "../../images/cancel.svg";
import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import axios from "axios";
const url = "http://localhost:4000/tasks";

const CourseEdit = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    courseNum: "",
    courseLink: "",
    hubSpotTicket: "",
    rocketChat: "",
    instructor: "",
    teacherAssistant: "",
    location: "",
    days: "",
    mode: "",
    start_date: "yyyy-MM-dd",
    end_date: "YYYY-MM-DD",
    startStudents: 0,
    endtudents: 0,
    activeStatus: false,
    id: "course_0",
    parent: "cohort_0",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      course_link: "",
      hubspot_ticket: "",
      rocketchat: "",
      instructor: "",
      teacher_assistant: "",
      location: "",
      day_of_week: "",
      mode: "",
      start_date: "2022-07-05",
      end_date: "2022-07-05",
      start_number_start: 0,
      student_number_end: 0,
      active_status: false,
      id: "cohort_0",
      parent: "cohort_0",
    });
  };

  const pushFormData = () => {
    // axios
    //   .put(url, formData)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       props.customEditTask(formData);
    //       resetForm();
    //     }
    //   })
    //   .catch((err) => console.log("there was an error", err));
    props.customEditTask(formData);
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
              <label className="label">Course Number</label>
              <input
                type="text"
                value={formData.courseNum}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.courseNum = e.target.value;
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
                value={formData.courseLink}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.courseLink = e.target.value;
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
                value={formData.hubSpotTicket}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.hubSpotTicket = e.target.value;
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
                value={formData.rocketChat}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.rocketChat = e.target.value;
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
                value={formData.teacherAssistant}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.teacherAssistant = e.target.value;
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
                value={formData.days}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.days = e.target.value;
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
                value={formData.startStudents}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.startStudents = e.target.value;
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
                value={formData.endStudents}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.endStudents = e.target.value;
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
                value={formData.activeStatus}
                onChange={(e) => {
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.activeStatus = e.target.value;
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

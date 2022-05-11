import React, { useEffect, useState } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import "./Displays.css";

const CourseDisplay = (props) => {
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);
  console.log("CourseDisplay Props", props);

  const editForm = () => {
    console.log(
      "This will eventually make the display go away and the form appear"
    );
    //dynamically render the form here
  };

  useEffect(() => {
    console.log("Current task", props.modalState.currentTask);
    props.modalState.currentTask.start_date
      ? console.log(
          "start date",
          props.modalState.currentTask.start_date.toString()
        )
      : console.log("");
  }, [props.modalState.currentTask]);

  return (
    <div>
      <form
        className="courseForm-display"
        //may need/ want to change this, bc this is courseDisplay.display is for the courseForm
        style={
          props.modalState.courseDisplay.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <Exit
          className="exit-button"
          onClick={() => {
            props.handleModalDisplayState("courseDisplay", {
              display: false,
              id: "course_0",
              courseName: "PropsfakeCourseName",
            });
            props.handleModalDisplayState("currentTask", {});
          }}
        />
        <h1 className="minor-title">Course Info</h1>

        <div className="group-container">
          <div className="group">
            <div className="display-info">
              <label className="display-label">Course Name:</label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.title}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Course Link:</label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.course_link}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Hubspot Ticket:</label>
              {/* <input
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
            
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.hubspot_ticket}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Rocket Chat:</label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.rocketchat}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Instructor:</label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.instructor}
              </div>
            </div>
            <div className="display-info">
              <label className="display-label">Teacher Assistant:</label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.teacher_assistant}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Location:</label>
              {/* <select
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
          </select> */}
              <div className="display-input">
                {props.modalState.currentTask.location}
              </div>
            </div>
          </div>

          <div className="group">
            <div className="display-info">
              <label className="display-label">Days:</label>
              {/* <select
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
          </select> */}
              <div className="display-input">
                {props.modalState.currentTask.day_of_week}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Mode:</label>
              {/* <select
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
          </select> */}
              <div className="display-input">
                {props.modalState.currentTask.mode}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Start Date:</label>
              {/* <input
            type="date"
            name="startDate"
            className="input"
            value={formData.startDate}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.start_date = e.target.value;
                return prev;
              });
            }}
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.start_date
                  ? props.modalState.currentTask.start_date
                      .toString()
                      .slice(0, 15)
                  : ""}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">End Date:</label>
              {/* <input
            type="date"
            name="endDate"
            className="input"
            value={formData.endDate}
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.end_date = e.target.value;
                return prev;
              });
            }}
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.end_date
                  ? props.modalState.currentTask.end_date
                      .toString()
                      .slice(0, 15)
                  : ""}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">
                Number of Students Starting:
              </label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.student_number_start}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">
                Number of Students Ending:
              </label>
              {/* <input
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
          /> */}
              <div className="display-input">
                {props.modalState.currentTask.student_number_end}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Active Status:</label>
              {/* <input
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
          <span className="slider round"></span> */}
              <div className="display-input">
                {props.modalState.currentTask.active_status
                  ? "active"
                  : "inactive"}
              </div>
            </div>
          </div>
        </div>
        <div
          className="submit"
          value="Edit"
          onClick={() => props.switchForms("courseDisplay", "courseEditForm")}
        >
          Edit
        </div>
      </form>
    </div>
  );
};

export default CourseDisplay;

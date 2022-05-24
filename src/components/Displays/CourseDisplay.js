import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import "./Displays.css";

const CourseDisplay = (props) => {
  useEffect(() => {
    props.modalState.currentTask.start_date
      ? console.log(
          "start date",
          props.modalState.currentTask.start_date.toString()
        )
      : console.log("");
  }, [props.modalState.currentTask]);

  return (
    <div 
    style={
      props.modalState.courseDisplay.display
        ? { display: "flex" }
        : { display: "none" }
    }>
      <form
        className="courseForm-display"
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
              <div className="display-input">
                {props.modalState.currentTask.title}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Course Link:</label>
              <div className="display-input">
                {props.modalState.currentTask.course_link}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Hubspot Ticket:</label>
              <div className="display-input">
                {props.modalState.currentTask.hubspot_ticket}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Rocket Chat:</label>
              <div className="display-input">
                {props.modalState.currentTask.rocketchat}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Instructor:</label>
              <div className="display-input">
                {props.modalState.currentTask.instructor}
              </div>
            </div>
            <div className="display-info">
              <label className="display-label">Teacher Assistant:</label>
              <div className="display-input">
                {props.modalState.currentTask.teacher_assistant}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Location:</label>
              <div className="display-input">
                {props.modalState.currentTask.location}
              </div>
            </div>
          </div>

          <div className="group">
            <div className="display-info">
              <label className="display-label">Days:</label>
              <div className="display-input">
                {props.modalState.currentTask.day_of_week}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Mode:</label>
              <div className="display-input">
                {props.modalState.currentTask.mode}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Start Date:</label>
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
              <div className="display-input">
                {props.modalState.currentTask.student_number_start}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">
                Number of Students Ending:
              </label>
              <div className="display-input">
                {props.modalState.currentTask.student_number_end}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">Active Status:</label>
              <div className="display-input">
                {props.modalState.currentTask.active_status
                  ? "active"
                  : "inactive"}
              </div>
            </div>
          </div>
        </div>
        <section
          className="submit"
          value="Edit"
          onClick={() => props.switchForms("courseDisplay", "courseEditForm")}
        >
          Edit
        </section>
      </form>
    </div>
  );
};

export default CourseDisplay;

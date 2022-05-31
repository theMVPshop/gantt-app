import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import "./Displays.css";

const CourseDisplay = (props) => {
  useEffect(() => {

    console.log("day of week: ", props.modalState.currentTask.day_of_week)

    props.modalState.currentTask.start_date
      ? console.log(
          "start date",
          props.modalState.currentTask.start_date.toString()
        )
      : console.log("");
  }, [props.modalState.currentTask]);

  // const displayDays = (props) => {
    
  //   if (props.modalState.currentTask.day_of_week === "partTimeMonWed"){
  //     return "Mon/Wed"
  //   }else if(props.modalState.currentTask.day_of_week === "partTimeTuesThurs"){
  //     return "Tues/Thurs"
  //   }else if (props.modalState.currentTask.day_of_week === "fullTime"){
  //     return "Full Time"
  //   } 
  // }

  const displayMode = (props) => {
    console.log( "props.modalState.currentTask.location:", props.modalState.currentTask.location)
    if (props.modalState.currentTask.mode === "inPerson") {
      return "In Person"
    }else if (props.modalState.currentTask.mode === "online") {
      return "Online"
    }
  }

  const displayLocation = (props) => {
    if (props.modalState.currentTask.location === "acaStEdwards") {
      return "ACA St. Edwards"
    } else if (props.modalState.currentTask.location ==="lca") {
      return "LCA"
    } else if (props.modalState.currentTask.location === "acaOnlineNorth") {
      return "ACA-Online-North"
    } else if (props.modalState.currentTask.location === "ttcu") {
      return "TTCU"
    } else if (props.modalState.currentTask.location === "ttcuMarbleFalls") {
      return "TTCU-Marble Falls"
    }
  }
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
                {/* {props.modalState.currentTask.location === "???"
                  ? "ACA St Edwards"
                  : props.modalState.currentTask.location} */}
                  {props.modalState.currentTask.location}
              </div>
            </div>
          </div>

          <div className="group">
            <div className="display-info">
              <label className="display-label">Days:</label>
              <div className="display-input">
                {/* call a function that returns three possible versions of this */}
                {/* {displayDays(props)} */}
                {props.modalState.currentTask.days}
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
                  ? "Active"
                  : "Inactive"}
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

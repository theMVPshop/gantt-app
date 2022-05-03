import { gantt } from "dhtmlx-gantt";
import React, { useEffect, useState } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";
const url = "http://localhost:4000/tasks";

const CourseForm = (props) => {
  console.log("COURSE FORM PROPS", props);
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);

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
    start_date: "2022-07-05",
    end_date: "2022-07-05",
    student_number_start: 0,
    student_number_end: 0,
    active_status: false,
    id: "cohort_0",
    parent: "cohort_0",
  });

  //function that resets formData back to default
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
      student_number_start: 0,
      student_number_end: 0,
      active_status: false,
      id: "cohort_0",
      parent: "cohort_0",
    });
  };

  const pushFormData = () => {
    var courseCounter = 1;
    var idArray = [];
    for (let i = 0; i < props.data.data.length; i++) {
      let courseIDArray = props.data.data[i].id.split("_");
      if (courseIDArray[0] === "course") {
        courseCounter++;
        idArray.push(courseIDArray[1]);
      }
    }
    let newID = Math.max(...idArray) + 1;
    formData.id = `course_${newID}`;
    formData.parent = props.modalState.addCourseForm.id;

    axios
      .post(url, formData)
      .then((res) => {
        if (res.status === 200) {
          props.customAddTask(formData);
          resetForm();
        }
      })
      .catch((err) => console.log("there was an error", err));
    gantt.open(props.courseDisplay.id); //forces open the parent task
    props.handleModalDisplayState("addCourseForm", {
      display: false,
      id: "course_0",
    }); //turning modal display to none and resetting the parent task id passed as a prop
  };

  return (
    <div>
      <form
        className="courseForm"
        style={
          props.modalState.addCourseForm.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <Exit
          className="exit-button"
          onClick={() => {
            console.log(
              "add course form state",
              props.modalState.addCourseForm
            );
            props.handleModalDisplayState("addCourseForm", {
              display: false,
              id: "course_0",
            });
          }}
        ></Exit>
        <h1 className="minor-title">Add Course</h1>
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
                  console.log(e.target.checked);
                  setFormData((prevState) => {
                    let prev = { ...prevState };
                    prev.active_status = e.target.checked;
                    return prev;
                  });
                }}
              />
              <span className="slider round"></span>
            </div>
          </div>
        </div>
        <button className="submit" onClick={pushFormData}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CourseForm;

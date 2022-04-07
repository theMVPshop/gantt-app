import React, { useEffect, useState } from "react";

const CourseForm = (props) => {
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);

  const [formData, setFormData] = useState({
    courseNum: 0,
    courseLink: 0,
    hubSpotTicket: 0,
    rocketChat: 0,
    instructor: 0,
    teacherAssistant: 0,
    location: 0,
    days: 0,
    mode: 0,
    startDate: 0,
    endDate: 0,
    startStudents: 0,
    endStudents: 0,
    activeStatus: 0,
  });

  return (
    <div>
      <form
        className="courseForm"
        style={
          props.courseDisplay.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div className="info">
          <label className="label">Course Number</label>
          <input
            type="text"
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

        <div className="info">
          <label className="label">Days</label>
          <select
            className="input"
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
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.startDate = e.target.value;
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
            onChange={(e) => {
              setFormData((prevState) => {
                let prev = { ...prevState };
                prev.endDate = e.target.value;
                return prev;
              });
            }}
          />
        </div>

        <div className="info">
          <label className="label">Number of Students Starting</label>
          <input type="number" name="studentNumStart" className="input" />
        </div>

        <div className="info">
          <label className="label">Number of Students Ending</label>
          <input type="number" name="studentNumEnd" className="input" />
        </div>

        <div className="info">
          <label className="label">Active Status</label>
          <input type="checkbox" className="input" />
          <span className="slider round"></span>
        </div>

        <input type="submit" className="submit" value="Save" />
      </form>
    </div>
  );
};

export default CourseForm;

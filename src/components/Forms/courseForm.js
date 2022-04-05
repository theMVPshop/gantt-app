import React, { useEffect } from "react";

const CourseForm = (props) => {
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);

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
          <input type="text" name="courseNum" className="input" />
        </div>

        <div className="info">
          <label className="label">Course Link</label>
          <input type="text" name="courseLink" className="input" />
        </div>

        <div className="info">
          <label className="label">Hubspot Ticket</label>
          <input type="text" name="hubSpotTicket" className="input" />
        </div>

        <div className="info">
          <label className="label">Rocket Chat</label>
          <input type="text" name="rocketChat" className="input" />
        </div>

        <div className="info">
          <label className="label">Instructor</label>
          <input type="text" name="instructor" className="input" />
        </div>
        <div className="info">
          <label className="label">Teacher Assistant</label>
          <input type="text" name="teacherAssistant" className="input" />
        </div>

        <div className="info">
          <label className="label">Location</label>
          <select className="input">
            <option value="acaStEdwards">ACA - St. Edwards</option>
            <option value="lca">LCA</option>
            <option value="acaOnlineNorth">ACA - Online-North</option>
            <option value="ttcu">TTCU</option>
            <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
          </select>
        </div>

        <div className="info">
          <label className="label">Days</label>
          <select className="input">
            <option value="partTimeMonWed">Mon/Wed</option>
            <option value="partTimeTuesThurs">Tues/Thurs</option>
            <option value="fullTime">Full Time</option>
          </select>
        </div>

        <div className="info">
          <label className="label">Mode</label>
          <select className="input">
            <option value="online">Online</option>
            <option value="inPerson">In-Person</option>
          </select>
        </div>

        <div className="info">
          <label className="label">Start Date</label>
          <input type="date" name="startDate" className="input" />
        </div>

        <div className="info">
          <label className="label">End Date</label>
          <input type="date" name="endDate" className="input" />
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

        <input type="submit" id="submit" value="Save" />
      </form>
    </div>
  );
};

export default CourseForm;

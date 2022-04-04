import React from "react";

const CourseForm = (props) => {
  return (
    <div>
      <form className="courseForm">
      <dic className="courseContainer">

      <div className="labels">
          <label id="label">Course Number</label>
          <label id="label">Course Link</label>
          <label id="label">Hubspot Ticket</label>
          <label id="label">Rocket Chat</label>
          <label id="label">Instructor</label>
          <label id="label">Teacher Assistant</label>
          <label id="label">Location</label>
          <label id="label">Days</label>
          <label id="label">Mode</label>
          <label id="label">Start Date</label>
          <label id="label">End Date</label>
          <label id="label">Number of Students Starting</label>
          <label id="label">Number of Students Ending</label>
          <label className="switch" id="label">Active Status</label>
        </div>

        <div className="inputs">
          <input type="text" name="courseNum" id="input" />
          <input type="text" name="courseLink" id="input" />
          <input type="text" name="hubspotTicket" id="input" />
          <input type="text" name="rocketChat"  id="input"/>
          <input type="text" name="instructor" id="input"/>
          <input type="text" name="teacherAssistant" id="input" />
          <select id="input">
            <option value="acaStEdwards">ACA - St. Edwards</option>
            <option value="lca">LCA</option>
            <option value="acaOnlineNorth">ACA - Online-North</option>
            <option value="ttcu">TTCU</option>
            <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
          </select>
          <select id="input">
            <option value="partTimeMonWed">Mon/Wed</option>
            <option value="partTimeTuesThurs">Tues/Thurs</option>
            <option value="fullTime">Full Time</option>
          </select>
          <select id="input">
            <option value="online">Online</option>
            <option value="inPerson">In-Person</option>
          </select>
          <input type="date" name="startDate" id="input"/>
          <input type="date" name="endDate" id="input" />
          <input type="number" name="studentNumStart" id="input" />
          <input type="number" name="studentNumEnd" id="input" />
          <input type="checkbox" id="input" />
          <span className="slider round"></span>
        </div>

      </dic>
        

        <input type="submit" id="submit" value="Save" />

      </form> 
    </div>
  );
};

export default CourseForm;

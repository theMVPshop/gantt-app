import React from "react";
import "./Forms.css";

const CourseForm = () => {
  return (
    <div>
      <form className="courseForm">
        <label>
          Course Number
          <input type="text" name="courseNum" />
        </label>
        <label>
          Course Link
          <input type="text" name="courseLink" />
        </label>
        <label>
          Hubspot Ticket
          <input type="text" name="hubspotTicket" />
        </label>
        <label>
          Rocket Chat
          <input type="text" name="rocketChat" />
        </label>
        <label>
          Instructor
          <input type="text" name="instructor" />
        </label>
        <label>
          Teacher Assistant
          <input type="text" name="teacherAssistant" />
        </label>
        <label>
          Location
          <select>
            <option value="acaStEdwards">ACA - St. Edwards</option>
            <option value="lca">LCA</option>
            <option value="acaOnlineNorth">ACA - Online-North</option>
            <option value="ttcu">TTCU</option>
            <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
          </select>
        </label>
        <label>
          Days
          <select>
            <option value="partTimeMonWed">Mon/Wed</option>
            <option value="partTimeTuesThurs">Tues/Thurs</option>
            <option value="fullTime">Full Time</option>
          </select>
        </label>
        <label>
          Mode
          <select>
            <option value="online">Online</option>
            <option value="inPerson">In-Person</option>
          </select>
        </label>
        <label>
          Start Date
          <input type="date" name="startDate" />
        </label>
        <label>
          End Date
          <input type="date" name="endDate" />
        </label>
        <label>
          Number of Students Starting
          <input type="number" name="studentNumStart" />
        </label>
        <label>
          Number of Students Ending
          <input type="number" name="studentNumEnd" />
        </label>
        <label class="switch">
          Active Status
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <input type="submit" id="submit" value="Save" />
      </form>
    </div>
  );
};

export default CourseForm;
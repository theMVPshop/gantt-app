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
          /*checks whether modal should display or not*/
          props.courseDisplay.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div className="courseContainer">
          <div className="labels">
            <label className="label-1">Course Number</label>
            <label className="label-1">Course Link</label>
            <label className="label-1">Hubspot Ticket</label>
            <label className="label-1">Rocket Chat</label>
            <label className="label-1">Instructor</label>
            <label className="label-1">Teacher Assistant</label>
            <label className="label-1">Location</label>
            <label className="label-1">Days</label>
            <label className="label-1">Mode</label>
            <label className="label-1">Start Date</label>
            <label className="label-1">End Date</label>

            <label className="label-2">Number of Students Starting</label>
            <label className="label-2">Number of Students Ending</label>
            <label className="label-2">Active Status</label>
          </div>

          <div className="inputs">
            <input type="text" name="courseNum" className="text-input" />
            <input type="text" name="courseLink" className="text-input" />
            <input type="text" name="hubSpotTicket" className="text-input" />
            <input type="text" name="rocketChat" className="text-input" />
            <input type="text" name="instructor" className="text-input" />
            <input type="text" name="teacherAssistant" className="text-input" />
            <select className="select-input">
              <option value="acaStEdwards">ACA - St. Edwards</option>
              <option value="lca">LCA</option>
              <option value="acaOnlineNorth">ACA - Online-North</option>
              <option value="ttcu">TTCU</option>
              <option value="ttcuMarbleFalls">TTCU - Marble Falls</option>
            </select>
            <select className="select-input">
              <option value="partTimeMonWed">Mon/Wed</option>
              <option value="partTimeTuesThurs">Tues/Thurs</option>
              <option value="fullTime">Full Time</option>
            </select>
            <select className="select-input">
              <option value="online">Online</option>
              <option value="inPerson">In-Person</option>
            </select>
            <input type="date" name="startDate" className="select-input" />
            <input type="date" name="endDate" className="select-input" />
            <input
              type="number"
              name="studentNumStart"
              className="last-input"
            />
            <input type="number" name="studentNumEnd" className="last-input" />
            <input type="checkbox" className="last-input" />
            <span className="slider round"></span>
          </div>
        </div>

        <input type="submit" id="submit" value="Save" />
      </form>
    </div>
  );
};

export default CourseForm;

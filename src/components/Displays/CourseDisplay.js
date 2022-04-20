import React, { useEffect, useState } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg"
import "./Displays.css"

const CourseDisplay = (props) => {
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);


  //changed formData & setFormData to displayData & setDisplayData
  //need to bring in data from... where?
  let courseNum= "fakeCourseNum";
  let courseLink= "fakeCourseLink";
  let hubSpotTicket= "fakeHubSpot";
  let rocketChat= "fakeRocketChat";
  let instructor= "fakeInstructor";
  let teacherAssistant= "fakeTA";
  let location= "fakeLocation";
  let days= "fakeDays";
  let mode= "telegraph";
  let startDate= "09/08/1970";
  let endDate= "06/26/1988";
  let startStudents= 4502;
  let endStudents= 4501;
  let activeStatus= false;

  const editForm = () => {
    console.log("This will eventually make the display go away and the form appear")
    //dynamically render the form here
  }
  return (
    <div>
      <form
        className="courseForm-display"
        //may need/ want to change this, bc this is courseDisplay.display is for the courseForm
        style={
          props.modalState.courseDisplay.display
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <Exit className="exit"
        onClick={() => {
          console.log("display",props.modalState.courseDisplay.display)
          const copy = props.modalState
          copy.courseDisplay.display = !copy.courseDisplay.display
          props.setModalState(copy)
        }}
        ></Exit>
        <div className="group-container">
        <div className="group">
        <div className="display-info">
          <label className="display-label">Course Number:</label>
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
            {courseNum}
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
            {courseLink}
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
            {hubSpotTicket}
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
            {rocketChat}
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
            {instructor}
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
            {teacherAssistant}
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
            {location}
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
            {days}
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
            {mode}
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
            {startDate}
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
            {endDate}
          </div>
        </div>

        <div className="display-info">
          <label className="display-label">Number of Students Starting:</label>
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
            {startStudents}
          </div>
        </div>

        <div className="display-info">
          <label className="display-label">Number of Students Ending:</label>
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
            {endStudents}
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
            {activeStatus}
          </div>
        </div>
        </div>
        </div>
        {/* <input className="submit" value="Save" onClick={pushFormData} /> */}
        <input type="submit" className="edit-button" value="Edit" onClick={editForm}/>
      </form>
    </div> 
  );
};

export default CourseDisplay;

//pieces taken out from CourseForm


//function that resets formData back to default
// const resetForm = () => {
//   setFormData({
//     courseNum: "",
//     courseLink: "",
//     hubSpotTicket: "",
//     rocketChat: "",
//     instructor: "",
//     teacherAssistant: "",
//     location: "",
//     days: "",
//     mode: "",
//     start_date: "2022-07-05",
//     end_date: "2022-07-05",
//     startStudents: 0,
//     endStudents: 0,
//     activeStatus: false,
//   });
// };

// const pushFormData = () => {
//   console.log(props.courseDisplay.id);
//   props.setData((prevState) => {
//     let prev = { ...prevState };
//     const found = prev.data.find(
//       (element) => element.id === props.courseDisplay.id
//     );
//     console.log(found);
//     return prev;
//   });
// };

// const [formData, setFormData] = useState({
//   courseNum: "",
//   courseLink: "",
//   hubSpotTicket: "",
//   rocketChat: "",
//   instructor: "",
//   teacherAssistant: "",
//   location: "",
//   days: "",
//   mode: "",
//   startDate: 0,
//   endDate: 0,
//   startStudents: 0,
//   endStudents: 0,
//   activeStatus: false,
// });


import React, { useEffect, useState } from "react";

const CourseForm = (props) => {
  // useEffect(() => {
  //   console.log(props.courseDisplay.id);
  // }, [props.courseDisplay.id]);

  const [formData, setFormData] = useState({
    courseNum: "",
    courseLink: "",
    hubSpotTicket: "",
    rocketChat: "",
    instructor: "",
    teacherAssistant: "",
    location: "",
    days: "",
    mode: "",
    startDate: 0,
    endDate: 0,
    startStudents: 0,
    endStudents: 0,
    activeStatus: false,
  });

  //function that resets formData back to default
  const resetForm = () => {
    setFormData({
      courseNum: "",
      courseLink: "",
      hubSpotTicket: "",
      rocketChat: "",
      instructor: "",
      teacherAssistant: "",
      location: "",
      days: "",
      mode: "",
      start_date: "2022-07-05",
      end_date: "2022-07-05",
      startStudents: 0,
      endStudents: 0,
      activeStatus: false,
    });
  };

  const pushFormData = () => {
    console.log(props.courseDisplay.id);
    props.setData((prevState) => {
      let prev = { ...prevState };
      const found = prev.data.find(
        (element) => element.id === props.courseDisplay.id
      );
      console.log(found);
      return prev;
    });
  };

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
          />
        </div>

        <div className="info">
          <label className="label">Course Link</label>
          <input
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
          />
        </div>

        <div className="info">
          <label className="label">Hubspot Ticket</label>
          <input
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
          />
        </div>

        <div className="info">
          <label className="label">Rocket Chat</label>
          <input
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
            value={formData.teacherAssistant}
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
            value={formData.startDate}
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
            value={formData.endDate}
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
          <label className="label">Number of Students Starting</label>
          <input
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
          />
        </div>

        <div className="info">
          <label className="label">Number of Students Ending</label>
          <input
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
          />
        </div>

        <div className="info">
          <label className="label">Active Status</label>
          <input
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
          <span className="slider round"></span>
        </div>

        <input className="submit" value="Save" onClick={pushFormData} />
      </form>
    </div>
  );
};

export default CourseForm;

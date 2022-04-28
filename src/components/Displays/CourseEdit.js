import { ReactComponent as Exit } from "../../images/cancel.svg";

const CourseEdit = (props) => {
  return (
    <div>
      <form
        className="courseForm-display"
        //may need/ want to change this, bc this is courseDisplay.display is for the courseForm
        style={
          props.modalState.courseEditForm.display
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <Exit
          className="exit"
          onClick={() => {
            console.log("display", props.modalState.courseDisplay.display);
            const copy = props.modalState;
            copy.courseDisplay.display = !copy.courseDisplay.display;
            props.handleModalDisplayState("courseEditForm", {
              display: "false",
              id: "course_0",
            });
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
              <div className="display-input">{props.modalState.courseNum}</div>
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
              <div className="display-input">{props.modalState.courseLink}</div>
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
                {props.modalState.hubSpotTicket}
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
              <div className="display-input">{props.modalState.rocketChat}</div>
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
              <div className="display-input">{props.modalState.instructor}</div>
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
                {props.modalState.teacherAssistant}
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
              <div className="display-input">{props.modalState.location}</div>
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
              <div className="display-input">{props.modalState.days}</div>
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
              <div className="display-input">{props.modalState.mode}</div>
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
              <div className="display-input">{props.modalState.startDate}</div>
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
              <div className="display-input">{props.modalState.endDate}</div>
            </div>

            <div className="display-info">
              <label className="display-label">
                Number of Students Starting:
              </label>
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
                {props.modalState.startStudents}
              </div>
            </div>

            <div className="display-info">
              <label className="display-label">
                Number of Students Ending:
              </label>
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
                {props.modalState.endStudents}
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
                {props.modalState.activeStatus}
              </div>
            </div>
          </div>
        </div>
        {/* <input className="submit" value="Save" onClick={pushFormData} /> */}
        <input
          type="submit"
          className="edit-button"
          value="Edit"
          onClick={() => {
            console.log("test");
          }}
        />
      </form>
    </div>
  );
};

export default CourseEdit;

import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";

const url = "https://gantt-server.herokuapp.com/holidays/";

const HolidayDelete = (props) => {
  // const deleteTask = () => {
  //   let course = props.modalState.confirmDeleteModal.id;
  //   props.deleteTask(course);
  //   resetModal();
  // };
  // let id = props.modalState.confirmDeleteModal.id;

  console.log("new props", props);

  useEffect(() => {
    axios
    .get(url)
    .then((res) => {
      res.data.forEach((obj) => {
        let id = obj.id;
        let holiday = obj.text;
        console.log(holiday, "with ID", id)
      });
    })
    .catch((err) => console.log("error", err));
  })

  return (
    <div
      style={
        props.holidayDeleteModalState
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form className="HolidayDelete" id="HolidayDelete">
        <Exit
          className="exit-button"
          onClick={() => {
            props.setHolidayDeleteModalState(false)
          }}
        ></Exit>
        <h1 className="minor-title" id="delete-title">
          Are you sure you want to delete{" "}
          {/* <b>{props.modalState.confirmDeleteModal.title}</b>? */}
        </h1>
        <div className="deleteButtonsCont" id="deleteButtonsCont">
          <button
            className="submit deleteYesNoButtons"
            onClick={() => {
              props.setHolidayDeleteModalState(false);
              axios
                // .delete(`${url}/${id}`)
                .then((res) => console.log(res))
                .catch((err) => console.log("there was an error", err));
            }}
          >
            Yes
          </button>
          <button
            className="submit deleteYesNoButtons"
            onClick={() => {
              props.setHolidayDeleteModalState(false)
            }}
            type="button"
          >
            No
          </button>
        </div>
      </form>
    </div>
  );
};

export default HolidayDelete;
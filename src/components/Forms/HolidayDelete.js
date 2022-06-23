import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";

const url = "https://gantt-server.herokuapp.com/holidays/";

const HolidayDelete = (props) => {

  console.log("new props", props);

  console.log(props.modalState.deleteHolidayModal.id);

  return (
    <div
      style={
        props.modalState.deleteHolidayModal.display
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <form className="HolidayDelete" id="HolidayDelete">
        <Exit
          className="exit-button"
          onClick={() => {
            props.handleModalDisplayState("deleteHolidayModal", {
              display: false,
              id: 0
            })
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
              props.handleModalDisplayState("deleteHolidayModal", {
                display: false,
                id: 0
              })
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
              props.handleModalDisplayState("deleteHolidayModal", {
                display: false,
                id: 0
              })
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
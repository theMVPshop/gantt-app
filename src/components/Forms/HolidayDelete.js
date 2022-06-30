import { gantt } from "dhtmlx-gantt";
import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";
import axios from "axios";

const url = "https://gantt-server.herokuapp.com/holidays/";

const HolidayDelete = (props) => {
 

  console.log("new props", props.modalState.deleteHolidayModal.id);
  let deleteID = props.modalState.deleteHolidayModal.id;
  let title = props.modalState.deleteHolidayModal.title;

  return (
    <div
      style={
        props.modalState.deleteHolidayModal.display
          ? { display: "flex" }
          : { display: "none" }
      }
      id="holidayDeleteCont"
    >
      <form className="HolidayDelete" id="HolidayDelete">
        <Exit
          className="exit-button"
          id="exit-holiday-delete"
          onClick={() => {
            props.handleModalDisplayState("deleteHolidayModal", {
              display: false,
              id: 0,
            });
          }}
        ></Exit>
        <h1 className="minor-title" id="delete-title">
          Are you sure you want to delete {title}?
        </h1>
        <div className="deleteButtonsCont" id="deleteHolidayButtonsCont">
          <div
            className="submit deleteYesNoButtons"
            onClick={() => {
              props.fetchData();
              props.handleModalDisplayState("deleteHolidayModal", {
                display: false,
                id: 0,
              });
              axios
                .delete(`${url}/${deleteID}`)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    gantt.deleteMarker(deleteID);
                    props.setLoading(false);
                  }
                })
                .catch((err) => {
                  props.setLoading(false);
                  console.log("there was an error", err);
                });
            }}
          >
            Yes
          </div>
          <div
            className="submit deleteYesNoButtons"
            onClick={() => {
              props.handleModalDisplayState("deleteHolidayModal", {
                display: false,
                id: 0,
              });
            }}
            type="button"
          >
            No
          </div>
        </div>
      </form>
    </div>
  );
};

export default HolidayDelete;

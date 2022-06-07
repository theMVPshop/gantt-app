import React, { useEffect } from "react";
import { ReactComponent as Exit } from "../../images/cancel.svg";

import "./Displays.css";

const OverviewDisplay = (props) => {
  const showData = (e) =>{
    console.log("props.data in showData ", props.data)
    // {props.modalState.currentTask.end_date
    //   ? props.modalState.currentTask.end_date.toString().slice(0, 15)
    //   : ""}
  }
  return (
    <div>
      <p 
        className="overview-cont"
        onClick= {(e) => {
          showData(e)
        }}
      >
        T/Th 
        <br></br>
        <br></br>
        Web101: Feb1- Mar30 2022
        <br></br>
        JS211: Apr 1- May 30 2022
        <br></br>
        JS311: June 1 - July 30 2022
        <br></br>
        <br></br>
        Graduation Date: December 25 2022
        <br></br>
        <br></br>
        501 : Aug 1 - Sep 1 2022
        <br></br>
        {/* {props.modalState.currentTask.end_date
          ? props.modalState.currentTask.end_date.toString().slice(0, 15)
          : ""} */}

      </p>

    </div>
  );
};

export default OverviewDisplay;

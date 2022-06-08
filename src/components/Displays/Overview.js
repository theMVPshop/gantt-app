import React, { useEffect } from "react";


import "./Displays.css";

const OverviewDisplay = (props) => {
  console.log("props.data.data in OverviewDisplay: ", props.data.data)
  //find all the courses where data parent is equal to currentTask id
      

  return (
    <div>
      <p className="overview-cont">
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
        Graduation Date: 
              {props.modalState.currentTask.end_date.toString().slice(0, 15)}
        <br></br>
        <br></br>
        501 : Aug 1 - Sep 1 2022
        <br></br>

      </p>

    </div>
  );
};

export default OverviewDisplay;

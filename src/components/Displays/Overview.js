import React, { useEffect, useState } from "react";


import "./Displays.css";

const OverviewDisplay = (props) => {
  let arr = props.data.data
  
  const [overviewDays, setOverviewDays] = useState("")
  const [overview501, setOverview501] = useState("")
  const [overview501StartDate, setOverview501StartDate] = useState("")
  const [overview501EndDate, setOverview501EndDate] = useState("")
  let coursesArray = []
  const [overviewCourses, setOverviewCourses] = useState({
    course: "",
    start_date: "",
    end_date: "",
  })
  useEffect(() => {
    //loop over data.data
    for (let i = 0; i<arr.length; i++){
      //find all the courses where data parent is equal to currentTask id
      if(arr[i].parent == props.modalState.currentTask.id && arr[i].id){
        //if there's a day_of_week, set the day_of_week
        // this does NOT necessarily find the most recent day_of_week, if it differs across courses
        if(arr[i].day_of_week){
          setOverviewDays(arr[i].day_of_week)
        }
        
        //if there's a 501 course, set local state 
        if(arr[i].title.includes("501")) {
          setOverview501("501")
          setOverview501StartDate(arr[i].start_date.toString().slice(0, 15))
          setOverview501EndDate(arr[i].end_date.toString().slice(0, 15))
        }

        //get all the courses that are not 501
        if(arr[i].title.indexOf('501') === -1) {
          console.log("arr[i].title is a course, not 501: ", arr[i].title)
          let courseObj = {
            title: arr[i].title,
            start_date: arr[i].start_date
          }
          console.log("courseObj: ", courseObj)
          // setOverviewCourses(coursesArray)
        } 
      }
    }
  }, [props.modalState.currentTask]);
    
  return (
    <div>
      <p className="overview-cont">
      {overviewDays
            ? <>{overviewDays}<br></br>
            <br></br></>
            : ""}
     
      {/* <span>{overviewCourses.map((course, index)=>
        <>{course}</>
      )}</span> */}
     
       
        <br></br>
        JS211: Apr 1- May 30 2022
        <br></br>
        JS311: June 1 - July 30 2022
        <br></br>
        <br></br>
        Graduation Date: 
          {props.modalState.currentTask.end_date
            ? <>{props.modalState.currentTask.end_date.toString().slice(0, 15)} <br></br>
            <br></br></>
            : ""}
        {overview501
            ? <>{overview501}<span>{overview501StartDate}</span>- <span>{overview501EndDate}</span><br></br>
            <br></br></>
            : ""}
        <br></br>
      </p>
    </div>
  );
};

export default OverviewDisplay;

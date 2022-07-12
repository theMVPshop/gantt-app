import React, { useEffect, useState } from "react";


import "./Displays.css";

const OverviewDisplay = (props) => {
  let arr = props.data.data
  //local state necessary to save state related to the courses, 
  //based on the currentTask, which is a cohort
  const [overviewDays, setOverviewDays] = useState("")
  const [overview501, setOverview501] = useState("")
  const [overview501Days, setOverview501Days] = useState("")
  const [overview501StartDate, setOverview501StartDate] = useState("")
  const [overview501EndDate, setOverview501EndDate] = useState("")
  let coursesArray = []
  const [overviewCourses, setOverviewCourses] = useState([])
  useEffect(() => {
    //loop over data.data
    for (let i = 0; i<arr.length; i++){
      //find all the courses where data parent is equal to currentTask id
      if(arr[i].parent === props.modalState.currentTask.id && arr[i].id){
        
        
        //if there's a 501 course, set local state 
        if(arr[i].title.includes("501")) {
          setOverview501("501")
          setOverview501Days(arr[i].day_of_week)
          setOverview501StartDate(arr[i].start_date.toString().slice(3, 11))
          setOverview501EndDate(arr[i].end_date.toString().slice(3, 15))
        }

        //get all the courses that are not 501
        if(arr[i].title.indexOf('501') === -1) {
          //if there's a day_of_week, set the day_of_week
        // this does NOT necessarily find the most recent day_of_week, if it differs across courses
          if(arr[i].day_of_week){
            setOverviewDays(arr[i].day_of_week)
          }
          let courseObj = {
            title: arr[i].title,
            start_date: arr[i].start_date,
            end_date: arr[i].end_date
          }
          coursesArray.push(courseObj)
          setOverviewCourses(coursesArray)
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
      {overviewCourses.map((course, index)=>
        <span key={index}>
        <span className="overviewLeftItem">{course.title}:</span>
        {course.start_date.toString().slice(12, 15) === course.end_date.toString().slice(12, 15) ? <span> {course.start_date.toString().slice(3, 11)}</span> : <span> {course.start_date.toString().slice(3, 15)}</span> } - 
        <span>{course.end_date.toString().slice(3, 15)}</span>

        <br></br>
        </span>
      )}
  
        <br></br>
        <span className="overviewLeftItem">Graduation Date: </span>
          {props.modalState.currentTask.end_date
            ? <span >{props.modalState.currentTask.end_date.toString().slice(0, 15)} <br></br>
            <br></br></span>
            : ""}
        {overview501
            ? <>
              <span className="overviewLeftItem">{overview501}:</span>
              <span className="overviewLeftItem">{overview501Days}</span>
              <span>{overview501StartDate}</span>- <span>{overview501EndDate}</span>
        
            </>
            : ""}
      </p>
    </div>
  );
};

export default OverviewDisplay;

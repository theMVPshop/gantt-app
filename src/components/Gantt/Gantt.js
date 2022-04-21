import React, { useEffect, useRef, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import CourseForm from "../Forms/CourseForm.js";
import CohortForm from "../Forms/CohortForm.js";
import CourseDisplay from "../Displays/CourseDisplay.js";
import CohortDisplay from "../Displays/CohortDisplay";
import ConfirmDelete from "../Forms/ConfirmDelete.js";
import CohortEdit from "../Displays/CohortEdit.js";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";
import axios from "axios";

const Gantt = () => {
  const containerRef = useRef(null);

  const [modalState, setModalState] = useState({
    addCourseForm: { display: false, id: "cohort_0" },
    addCohortForm: { display: false, id: "cohort_0" },
    cohortDisplay: {
      display: true,
      id: "cohort_0",
      cohortName: "PropsfakeCohortName",
    },
    courseDisplay: {
      display: false,
      id: "course_0",
      courseName: "PropsfakeCourseName",
    },
    confirmDeleteModal: {
      display: false,
      id: "cohort_0",
    },
    currentTask: {
      title: "boo"

    }
  });


  // const [courseFormDisplay, setCourseFormDisplay] = useState({
  //   display: false,
  //   id: "cohort_0",
  // });

  // const [cohortFormDisplay, setCohortFormDisplay] = useState({
  //   display: false,
  //   id: 0,
  // });

  // const [cohortDisplay, setCohortDisplay] = useState({
  //   display: false,
  //   id: 0,
  //   cohortName: "PropsfakeCohortName",
  // });

  // const [courseDisplay, setCourseDisplay] = useState({
  //   display: false,
  //   id: 0,
  //   courseName: "PropsfakeCourseName",
  // });

  // const [confirmDeleteModal, setConfirmDeleteModal] = useState({
  //   display: false,
  //   id: "cohort_0",
  // });

  //variables are for declaring our svg icons. DHTMLX Gantt requires custom icons to be stored as inline html (non JSX) elements
  var plusIconRow =
    "<svg id='plusIconRow' data-action='add' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var plusIconHeader =
    "<svg id='plusIconHeader' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var deleteIcon =
    "<svg id='deleteIcon' data-action='delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  var editIcon =
    "<svg id='editIcon' data-action='edit' width='20' height='20' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' xmlnsSvgjs='http://svgjs.com/svgjs'><defs id='SvgjsDefs1002'></defs><g id='SvgjsG1008'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'><path d='M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z' fill='#080000' class='color000 svgShape'></path></svg></g></svg>";

  //state for storing data, currently filled with dummy dat

  /**
   * 
   * {
    data: [
      {
        id: "cohort_1",
        text: "Cohort #1",
        start_date: "2022-04-11",
        end_date: "2022-04-15",
        open: true,
      },
      {
        id: "course_1",
        text: "Course #1",
        start_date: "2022-04-11",
        end_date: "2022-04-15",
        parent: "cohort_1",
      },
      {
        id: "cohort_2",
        text: "Cohort #2",
        start_date: "2022-04-13",
        end_date: "2022-04-15",
      },
      {
        id: "cohort_3",
        text: "Cohort #3",
        start_date: "2022-04-15",
        end_date: "2022-04-15",
      },
      {
        id: "cohort_4",
        text: "Cohort #4",
        start_date: "2022-04-15",
        end_date: "2022-04-15",
      }
    ],
    links: [{ id: 1, source: 1, target: 2, type: "0" }],
  }
   */

  const [data, setData] = useState({ data: [], links: [] });

  const [newTask, setNewTask] = useState({
    id: 0,
    text: "",
    start_date: "",
    duration: 0,
    progress: 0,
  });

  //monitors data and re-renders gantt chart if change detected
  useEffect(() => {
    gantt.parse(data);
    console.log(data);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/tasks/")
      .then((res) => {
        res.data.forEach((obj) => {
          obj.start_date = obj.start_date.slice(0, 10);
          obj.end_date = obj.end_date.slice(0, 10);
          obj.open = true;
        });
        setData({ data: res.data, links: [] });
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    console.log("DATA", data);
    gantt.parse(data);
  }, [data]);

  //when DOM content is loaded, this sets our custom Gantt columns
  document.addEventListener("DOMContentLoaded", (event) => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.config.scale_unit = "month";
    gantt.init(containerRef.current);
    //gantt.parse(data);

    //gantt custom columns
    gantt.config.columns = [
      {
        name: "title",
        label: "Task Name",
        width: "150",
        tree: true,
        resize: true,
      },
      {
        name: "start_date",
        label: "Start Date",
        align: "center",
        resize: true,
      },
      {
        name: "end_date",
        label: "Finish",
        width: 80,
        align: "center",
        resize: true,
      },
      {
        name: "add_custom",
        label: plusIconHeader,
        template: () => {
          return plusIconRow;
        },
        align: "center",
        width: 40,
      },
      {
        name: "Edit",
        label: "Edit",
        align: "center",
        template: () => {
          return editIcon;
        },
        width: 40,
      },
      {
        name: "delete",
        label: "Delete",
        align: "center",
        template: () => {
          return deleteIcon;
        },
        width: 40,
      },
    ];

    //onclick listener for custom buttons in row
    gantt.attachEvent("onTaskClick", function (id, e) {
      var button = e.target.closest("[data-action]");
      if (button) {
        var action = button.getAttribute("data-action");
        var copy = modalState;
        switch (action) {
          case "edit":
            console.log(id);
            break;
          case "add":
            copy.addCourseForm = { display: true, id: id };
            setModalState(copy);
            break;
          case "delete":
            let correctTask = data.data.find((element) => element.id == id);
            copy.confirmDeleteModal = {
              display: true,
              id: id,
              text: correctTask.text,
            };
            setModalState(copy);
            break;
          default:
            console.log("onTaskClick default");
            break;
        }
      }
    });

   
  });

//This runs on a double click of a task  (bar on calendar or column on left)
gantt.attachEvent("onTaskDblClick", function (id, e) {
  console.log("You double clicked a task with this id: ", id)
  console.log("data in double click: ", data)
  // func to find task that matches clicked task's id
  function getCurrentTask() {
    console.log("double click. finding current task...")
    for (let i = 0; i < data.data.length; i++) {
      console.log("getCurrentTask(), data[i].id in for loop: ", data.data[i].id)
      if(data.data[i].id == id ){
        console.log("THEY MATCH!")
        //copy current modal state
        setModalState((prevState)=> {
          var copy = {...prevState}
          //add current data object to copy
          copy.currentTask = data.data[i]
          return copy
        })
        return
      }
    }
  }
  getCurrentTask()
});

  return (
    <div>
      <div className="formCont" id="formCont">
        <CourseForm
          modalState={modalState}
          setModalState={setModalState}
          setData={setData}
          data={data}
        ></CourseForm>
        <CohortForm
          modalState={modalState}
          setModalState={setModalState}
          setData={setData}
          data={data}
        ></CohortForm>
        <ConfirmDelete
          modalState={modalState}
          setModalState={setModalState}
          data={data}
        ></ConfirmDelete>
        {/* <CourseDisplay
          // setCourseDisplay={setCourseDisplay}
          // courseDisplay={courseDisplay}
          data={data}
        ></CourseDisplay> */}
        <CohortDisplay
           modalState={modalState}
           setModalState={setModalState}
           setData={setData}
           data={data}
        ></CohortDisplay>
        {/* Course display form with x in top right corner */}
        <CourseDisplay
           modalState={modalState}
           setModalState={setModalState}
           setData={setData}
           data={data}
        ></CourseDisplay>
        <CohortEdit data={data}></CohortEdit>
        {/*<button
          onClick={() => {
            setCourseFormDisplay({ display: !courseFormDisplay.display });
          }}
        >
          ShowCourseForm
        </button>
        <button
          onClick={() => {
            setCohortFormDisplay({ display: !cohortFormDisplay.display });
          }}
        >
          ShowCohortForm
        </button>
        <button
          onClick={() => {
            setCourseDisplay({ display: !courseDisplay.display });
          }}
        >
          ShowCourse DISPLAY
        </button>*/}
      </div>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Gantt;

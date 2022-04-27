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
    addCourseForm: { display: false, id: "course_0" },
    addCohortForm: { display: false, id: "cohort_0" },
    cohortDisplay: {
      display: false,
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
      title: "",
    },
    currentTask: {},
  });

  //function for updating display state provided to components
  const handleModalDisplayState = (value, obj) => {
    setModalState((prevState) => {
      let stateCopy = { ...prevState };
      stateCopy[value] = obj;
      return stateCopy;
    });
    gantt.parse(data);
  };

  const customDeleteTask = (task) => {
    gantt.deleteTask(task);
    setData(gantt.serialize());
  };

  const customAddTask = (task) => {
    console.log(task);
    gantt.addTask(task);
    setData(gantt.serialize());
  };

  //variables are for declaring our svg icons. DHTMLX Gantt requires custom icons to be stored as inline html (non JSX) elements
  var plusIconRow =
    "<svg id='plusIconRow' data-action='add' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var plusIconHeader =
    "<svg id='plusIconHeader' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var deleteIcon =
    "<svg id='deleteIcon' data-action='delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  var editIcon =
    "<svg id='editIcon' data-action='edit' width='20' height='20' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' xmlnsSvgjs='http://svgjs.com/svgjs'><defs id='SvgjsDefs1002'></defs><g id='SvgjsG1008'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'><path d='M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z' fill='#080000' class='color000 svgShape'></path></svg></g></svg>";

  var viewIcon =
    "<?xml version='1.0' ?><svg enable-background='new 0 0 32 32' height='32px' data-action='view' id='viewIcon' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:cc='http://creativecommons.org/ns#' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:svg='http://www.w3.org/2000/svg'><g id='background'><rect fill='none' height='32' width='32'/></g><g id='view'><circle cx='16' cy='16' r='6'/><path d='M16,6C6,6,0,15.938,0,15.938S6,26,16,26s16-10,16-10S26,6,16,6z M16,24c-8.75,0-13.5-8-13.5-8S7.25,8,16,8s13.5,8,13.5,8   S24.75,24,16,24z'/></g></svg>";

  var exitIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='exit' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  //state for storing data, currently filled with dummy dat

  const [data, setData] = useState({ data: [], links: [] });

  const [newTask, setNewTask] = useState({
    id: 0,
    text: "",
    start_date: "",
    duration: 0,
    progress: 0,
  });

  //monitors data and re-renders gantt chart if change detected

  // maybe try fetch function then call it in useEffect
  // dateToStr function for gantt
  // let dateToStr = gantt.data.date_to_str("%Y-%m-%d %H:%i");
  // gantt.templates.format_date = function() {
  //     return dateToStr ();
  //   }

  useEffect(() => {
    gantt.parse(data);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/tasks/")
      .then((res) => {
        res.data.forEach((obj) => {
          obj.start_date = obj.start_date.slice(0, 10);
          obj.end_date = obj.end_date.slice(0, 10);
          obj.open = true;
          // console logging all objects which return date in correct string format and length
          // console.log("objects", obj);
          // setting data here returns date in following format - '2023-02-01T06:00:00.000Z'
          // also creates error - Invalid start_date argument for getDuration method
          // setData({ data: res.data, links: [] });
        });
        // here is where the dates change back to their original format
        setData({ data: res.data, links: [] });
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    console.log("DATA", data);
    gantt.parse(data);
  }, [data]);

  gantt.attachEvent("onTaskClick", function (id, e) {
    var button = e.target.closest("[data-action]");
    if (button) {
      var action = button.getAttribute("data-action");
      var copy = { ...modalState }; //getting copy of modalState on top level so it's accessible to all switch cases
      var dataCopy = data; //getting copy of gantt data on top level so it's accessible to all switch cases
      console.log("data copy", dataCopy);
      var taskIDArray = id.split("_");
      switch (action) {
        case "view":
          for (let i = 0; i < dataCopy.data.length; i++) {
            if (taskIDArray[0] === "course") {
              //check if clicked task is course
              copy.courseDisplay.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id == id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
              // setModalState(copy);
            } else if (taskIDArray[0] === "cohort") {
              //check if clicked task is cohort
              copy.cohortDisplay.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id == id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
            }
          }
          // setModalState(copy);
          break;
        case "edit":
          break;
        case "add":
          copy.addCourseForm = { display: true, id: id };
          setModalState(copy);
          break;
        case "delete":
          for (let i = 0; i < dataCopy.data.length; i++) {
            if (dataCopy.data[i].id == id) {
              copy.confirmDeleteModal = {
                display: true,
                id: id,
                title: dataCopy.data[i].title,
              };
              setModalState(copy);
              return;
            }
          }
          break;
        default:
          console.log("onTaskClick default");
          break;
      }
    }
  });

  //when DOM content is loaded, this sets our custom Gantt columns
  document.addEventListener("DOMContentLoaded", (event) => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.config.scale_unit = "month";
    gantt.init(containerRef.current);
    // gantt.parse(data);

    gantt.attachEvent("onTaskDblClick", function (id, e) {
      console.log(
        "This gantt.attachEvent, onTaskDblClick needs to stay here to prevent the default modal from popping up"
      );
    });

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
        name: "view",
        label: "view",
        template: () => {
          return viewIcon;
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
  });

  //This runs on a double click of a task  (bar on calendar or column on left)
  gantt.attachEvent("onTaskDblClick", function (id, e) {
    console.log("You double clicked a task with this id: ", id);
    console.log("data in double click: ", data);
    // func to find task that matches clicked task's id
    function getCurrentTask() {
      console.log("double click. finding current task...");
      for (let i = 0; i < data.data.length; i++) {
        console.log(
          "getCurrentTask(), data[i].id in for loop: ",
          data.data[i].id
        );
        if (data.data[i].id == id) {
          console.log("THEY MATCH!");
          //copy current modal state
          setModalState((prevState) => {
            var copy = { ...prevState };
            //add current data object to copy
            copy.currentTask = data.data[i];
            copy.courseDisplay.display = true;
            return copy;
          });
          return;
        }
      }
      getCurrentTask();
    }
  });

  return (
    <div>
      <div className="formCont" id="formCont">
        <CourseForm
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setModalState={setModalState}
          setData={setData}
          data={data}
          adddTask={customAddTask}
        ></CourseForm>
        <CohortForm
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setModalState={setModalState}
          setData={setData}
          data={data}
          addTask={customAddTask}
        ></CohortForm>
        <ConfirmDelete
          modalState={modalState}
          setModalState={setModalState}
          handleModalDisplayState={handleModalDisplayState}
          data={data}
          deleteTask={customDeleteTask}
        ></ConfirmDelete>
        {/* <CourseDisplay
          // setCourseDisplay={setCourseDisplay}
          // courseDisplay={courseDisplay}
          data={data}
        ></CourseDisplay> */}
        <CohortDisplay
          modalState={modalState}
          setModalState={setModalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          data={data}
          exitIcon={exitIcon}
        ></CohortDisplay>
        {/* Course display form with x in top right corner */}
        <CourseDisplay
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          data={data}
        ></CourseDisplay>
        <CohortEdit
          data={data}
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
        ></CohortEdit>
        <button
          onClick={() => {
            setModalState();
          }}
        >
          test
        </button>
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
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
        id="gantt-chart-container"
      ></div>
    </div>
  );
};

export default Gantt;

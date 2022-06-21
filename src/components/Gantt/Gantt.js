import React, { useEffect, useRef, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import CourseForm from "../Forms/CourseForm.js";
import CohortForm from "../Forms/CohortForm.js";
import CourseDisplay from "../Displays/CourseDisplay.js";
import CohortDisplay from "../Displays/CohortDisplay";
import ConfirmDelete from "../Forms/ConfirmDelete.js";
import CohortEdit from "../Displays/CohortEdit.js";
import CourseEdit from "../Displays/CourseEdit.js";
import OverviewDisplay from "../Displays/Overview.js";
import HolidayMarkerForm from "../Forms/HolidayMarkerForm.js";
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
    cohortEditForm: {
      display: false,
      id: "cohort_0",
    },
    courseEditForm: {
      display: false,
      id: "course_0",
    },
    confirmDeleteModal: {
      display: false,
      id: "cohort_0",
      title: "",
    },

    currentTask: {
      title: "",
      course_link: "",
      textbook: "",
      hubspot_ticket: "",
      rocketchat: "",
      instructor: "",
      teacher_assistant: "",
      location: "",
      day_of_week: "",
      mode: "",
      start_date: "2022-07-05",
      end_date: "2022-07-05",
      student_number_start: 0,
      student_number_end: 0,
      active_status: false,
      id: "cohort_0",
      parent: "cohort_0",
    },
  });
  const [holidayModalState, setHolidayModalState] = useState(false);
  const [tasksOrdered, setTasksOrdered] = useState({});
  const [taskStartDateDrag, setTaskStartDateDrag] = useState("");
  const [taskEndDateDrag, setTaskEndDateDrag] = useState("");

  // disables pop up error for invalid day index
  gantt.config.show_errors = false;

  //function for updating display state provided to components
  const handleModalDisplayState = (value, obj) => {
    setModalState((prevState) => {
      let stateCopy = { ...prevState };
      stateCopy[value] = obj;
      return stateCopy;
    });
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

  const customEditTask = (id, task) => {
    gantt.updateTask(id, task);
    setData(gantt.serialize());
  };

  const switchForms = (originalFormName, newFormName) => {
    let copy = { ...modalState };
    copy[originalFormName].display = false;
    copy[newFormName].display = true;
    setModalState(copy);
  };

  const pullData = () => {
    axios
      .get("https://gantt-server.herokuapp.com/tasks/")
      .then((res) => {
        res.data.forEach((obj) => {
          obj.start_date = obj.start_date.slice(0, 10);
          obj.end_date = obj.end_date.slice(0, 10);
          obj.open = true;
        });
        setData({ data: res.data, links: [] });
      })
      .catch((err) => console.log("error", err));
  };

  //variables are for declaring our svg icons. DHTMLX Gantt requires custom icons to be stored as inline html (non JSX) elements
  var plusIconRow =
    "<svg id='plusIconRow' className='plusIconRow' data-action='add' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var plusIconHeader =
    "<svg id='plusIconHeader' data-action='add_custom' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var deleteIcon =
    "<svg id='deleteIcon' data-action='delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  var editIcon =
    "<svg id='editIcon' data-action='edit' width='20' height='20' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' xmlnsSvgjs='http://svgjs.com/svgjs'><defs id='SvgjsDefs1002'></defs><g id='SvgjsG1008'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'><path d='M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z' fill='#080000' class='color000 svgShape'></path></svg></g></svg>";

  var viewIcon =
    "<?xml version='1.0' ?><svg enable-background='new 0 0 32 32' height='32px' data-action='view' id='viewIcon' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:cc='http://creativecommons.org/ns#' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:svg='http://www.w3.org/2000/svg'><g id='background'><rect fill='none' height='32' width='32'/></g><g id='view'><circle cx='16' cy='16' r='6'/><path d='M16,6C6,6,0,15.938,0,15.938S6,26,16,26s16-10,16-10S26,6,16,6z M16,24c-8.75,0-13.5-8-13.5-8S7.25,8,16,8s13.5,8,13.5,8   S24.75,24,16,24z'/></g></svg>";

  var exitIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' class='exit' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  //state for storing data
  const [data, setData] = useState({ data: [], links: [] });

  useEffect(() => {
    axios
      .get("https://gantt-server.herokuapp.com/tasks/")
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
    checkTaskOrder();
    gantt.parse(data);
  }, [data]);

  const checkTaskOrder = () => {
    var copy = { ...data };

    let copyTree = [];

    for (let i = 0; i < copy.data.length; i++) {
      let splitID = copy.data[i].id.split("");
      if (splitID[2] === "h") {
        let joined = splitID.join("");
        let objectTree = {
          cohort: joined,
          children: [],
        };
        let children = [];
        for (let y = i + 1; y < copy.data.length; y++) {
          if (copy.data[y].parent === joined) {
            let informationArr = {
              courseID: copy.data[y].id,
              start_date: copy.data[y].start_date,
              end_date: copy.data[y].end_date,
              title: copy.data[y].title,
            };
            children.push(informationArr);
          }
        }
        if (children.length > 0) {
          objectTree.children = children;
          copyTree.push(objectTree);
        }
      }
    }

    if (copyTree.length > 0) {
      for (let i = 0; i < copyTree.length; i++) {
        //iterate through each cohort
        for (let a = 0; a < copyTree[i].children.length; a++) {
          //pointer A for checking courses date
          for (let b = a + 1; b < copyTree[i].children.length; b++) {
            //pointer B for checking courses date
            let d1 = new Date(copyTree[i].children[a].start_date);
            let d2 = new Date(copyTree[i].children[b].start_date);

            if (d1 > d2) {
              copyTree[i].children.splice(a, 0, copyTree[i].children[b]);
              copyTree[i].children.splice(b + 1, 1);
            }
          }
        }
      }
    }
    setTasksOrdered(copyTree);
    // assignBarClasses(copyTree);
  };

  useEffect(() => {
    assignBarClasses(tasksOrdered);
  }, [tasksOrdered]);

  const assignBarClasses = (orderedTasks) => {
    gantt.templates.task_class = function (start, end, task) {
    // console.log("Ordered tasks:", orderedTasks)

      if (orderedTasks[0]) {
        if (orderedTasks[0].cohort === task.id) {
          console.log("It's a match")
          return "first_cohort";
        }
      }

      for (let i = 0; i < orderedTasks.length; i++) {
        if (task.parent === orderedTasks[i].cohort) {
          for (let y = 0; y < orderedTasks[i].children.length; y++) {
            if (task.id === orderedTasks[i].children[y].courseID) {
              console.log(y);
              console.log(task.title);
              switch (y) {
                case 0:
                  console.log("yes");
                  return "first_course";
                case 1:
                  return "second_course";
                case 2:
                  return "third_course";
                case 3:
                  return "fourth_course";
                case 4:
                  return "fifth_course";
                case 5:
                  return "sixth_course";
              }
            }
          }
        }
      }
      // return "nested_bar";
    };

    // gantt.templates.task_class = function(start, end, task) {
    //   if (orderedTasks[0].cohort === task.id) {
    //     return "first_cohort";
    //   }
    // }

  };

  gantt.attachEvent(
    "onGridHeaderClick",
    function (name, e) {
      var button = e.target.closest("[data-action]");
      gantt.detachEvent("task-header-click");
      if (button) {
        console.log("you clicked add custom");
        setModalState((prevState) => {
          let copy = { ...prevState };
          copy.addCohortForm.display = true;
          setModalState(copy);
          return copy;
        });
      }
      return true;
    },
    { id: "task-header-click" }
  );

  gantt.attachEvent(
    "onTaskDblClick",
    function (id, e) {
      console.log("You double clicked a task with this id: ", id);
      console.log("data in double click: ", data);
      gantt.detachEvent("gantt-task-dbl-click");
      // func to find task that matches clicked task's id
      function getCurrentTask() {
        console.log("double click. finding current task...");
        var taskIDArray = id.split("_");
        for (let i = 0; i < data.data.length; i++) {
          console.log(
            "getCurrentTask(), data[i].id in for loop: ",
            data.data[i].id
          );
          if (data.data[i].id === id) {
            console.log("THEY MATCH!");
            console.log(taskIDArray);
            //copy current modal state
            setModalState((prevState) => {
              var copy = { ...prevState };
              //add current data object to copy
              copy.currentTask = data.data[i];
              if (taskIDArray[0] === "course") {
                copy.courseDisplay.display = true;
              } else if (taskIDArray[0] === "cohort") {
                copy.cohortDisplay.display = true;
              }

              return copy;
            });
            return;
          }
        }
      }
      getCurrentTask();
    },
    { id: "gantt-task-dbl-click" }
  );

  const onTaskClick = (id, e) => {
    // expand/collapse cohorts
    if (e.target.className === "gantt_tree_icon gantt_close") {
      gantt.close(id);
    } else if (e.target.className === "gantt_tree_icon gantt_open") {
      gantt.open(id);
    }

    // button functionality for view, edit, add, delete
    var button = e.target.closest("[data-action]");
    if (button) {
      var action = button.getAttribute("data-action");
      var copy = { ...modalState }; //getting copy of modalState on top level so it's accessible to all switch cases
      var dataCopy = data; //getting copy of gantt data on top level so it's accessible to all switch cases
      var taskIDArray = id.split("_");
      gantt.detachEvent("task-click");
      switch (action) {
        case "view":
          for (let i = 0; i < dataCopy.data.length; i++) {
            if (taskIDArray[0] === "course") {
              //check if clicked task is course
              copy.courseDisplay.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id === id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
            } else if (taskIDArray[0] === "cohort") {
              //check if clicked task is cohort
              copy.cohortDisplay.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id === id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
            }
          }
          break;
        case "edit":
          for (let i = 0; i < dataCopy.data.length; i++) {
            if (taskIDArray[0] === "course") {
              //check if clicked task is course
              copy.courseEditForm.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id === id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
            } else if (taskIDArray[0] === "cohort") {
              //check if clicked task is cohort
              copy.cohortEditForm.display = "flex"; //if true set copy of state display to flex
              if (dataCopy.data[i].id === id) {
                //if clicked task id is equal to the current i data id property
                copy.currentTask = dataCopy.data[i]; //if true set copy of state current task to the found data
                setModalState(copy); //set modal state to copy
                return;
              }
            }
          }
          break;
        case "add":
          copy.addCourseForm = { display: true, id: id };
          console.log("COPY.ADDCOURSEFORM IN GANTT.JS", copy.addCourseForm);
          console.log("THE PROVIDED ID", id);
          setModalState(copy);
          break;
        case "delete":
          for (let i = 0; i < dataCopy.data.length; i++) {
            console.log("DELETE: ", copy.confirmDeleteModal.display);
            if (dataCopy.data[i].id === id) {
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
  };

  gantt.attachEvent("onTaskClick", onTaskClick, { id: "task-click" });

  // update task date by dragging end of task bar START
  gantt.attachEvent("onTaskDrag", function (id, mode, task, original) {
    let newStart = new Date(task.start_date);
    let newEnd = new Date(task.end_date);

    let startMonth = newStart.getMonth() + 1;
    let startDay = newStart.getDate();
    let startYear = newStart.getFullYear();

    let endMonth = newEnd.getMonth() + 1;
    let endDay = newEnd.getDate();
    let endYear = newEnd.getFullYear();

    if (startMonth < 10) {
      startMonth = "0" + startMonth;
    }

    if (startDay < 10) {
      startDay = "0" + startDay;
    }

    if (endMonth < 10) {
      endMonth = "0" + endMonth;
    }

    if (endDay < 10) {
      endDay = "0" + endDay;
    }

    newStart = [startYear, startMonth, startDay].join("-");
    newEnd = [endYear, endMonth, endDay].join("-");

    setTaskStartDateDrag(newStart);
    setTaskEndDateDrag(newEnd);
  });

  gantt.attachEvent("onAfterTaskDrag", function (id, mode, e) {
    if (taskStartDateDrag) {
      axios
        .put(`https://gantt-server.herokuapp.com/tasks/${id}`, {
          start_date: taskStartDateDrag,
        })
        .then((res) => {
          setTaskStartDateDrag("");
        })
        .catch((err) => console.log("there was an error", err));
    }

    if (taskEndDateDrag) {
      axios
        .put(`https://gantt-server.herokuapp.com/tasks/${id}`, {
          end_date: taskEndDateDrag,
        })
        .then((res) => {
          setTaskEndDateDrag("");
        })
        .catch((err) => console.log("there was an error", err));
    }
  });
  // update task date by dragging end of task bar END

  // vertical line marker START
  gantt.plugins({
    marker: true,
  });

  var dateToStr = gantt.date.date_to_str(gantt.config.task_date);
  
  var todayMarker = gantt.addMarker({ 
      start_date: new Date(), 
      css: "today",
      text: "Today", 
      title: dateToStr(new Date())
  });

  setInterval(function () {
    var today = gantt.getMarker(todayMarker);
    today.start_date = new Date();
    today.title = dateToStr(today.start_date);
    gantt.updateMarker(todayMarker);
  }, 1000 * 60);

  const showHolidayModal = () => setHolidayModalState(true);

  // const addHolidayMarker = () => {
  //   console.log("click! add holiday button")

  //   // var holidayMarker = gantt.addMarker({
  //   //   start_date: new Date(),
  //   //   css: "holiday",
  //   //   text: "Holiday",
  //   //   title: dateToStr(new Date())
  //   // });
  // }
  // vertical line marker END

  //when DOM content is loaded, this sets our custom Gantt columns
  document.addEventListener("DOMContentLoaded", (event) => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.config.wheel_scroll_sensitivity = 0.5;
    gantt.config.autosize = "y";

    //gantt custom columns

    gantt.templates.grid_row_class = function (start, end, task) {
      if (task.$level > 0) {
        return "nested_task";
      }
    };

    gantt.templates.task_text = function (start, end, task) {
      return task.title;
    };

    gantt.config.columns = [
      {
        name: "title",
        label: "Cohorts",
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
        name: "View",
        label: "View",
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

    var zoomConfig = {
      levels: [
        {
          name: "day",
          scale_height: 27,
          min_column_width: 80,
          scales: [{ unit: "day", step: 1, format: "%d %M" }],
        },
        {
          name: "week",
          scale_height: 50,
          min_column_width: 50,
          scales: [
            {
              unit: "week",
              step: 1,
              format: function (date) {
                var dateToStr = gantt.date.date_to_str("%d %M");
                var endDate = gantt.date.add(date, -6, "day");
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
            { unit: "day", step: 1, format: "%j %D" },
          ],
        },
        {
          name: "month",
          scale_height: 50,
          min_column_width: 120,
          scales: [
            { unit: "month", format: "%F, %Y" },
            { unit: "week", format: "Week #%W" },
          ],
        },
        {
          name: "quarter",
          height: 50,
          min_column_width: 90,
          scales: [
            {
              unit: "quarter",
              step: 1,
              format: function (date) {
                var dateToStr = gantt.date.date_to_str("%M");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 3, "month"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
            { unit: "month", step: 1, format: "%M" },
          ],
        },
        {
          name: "year",
          scale_height: 50,
          min_column_width: 30,
          scales: [{ unit: "year", step: 1, format: "%Y" }],
        },
      ],
      useKey: "ctrlKey",
      // trigger: "wheel",
      // element: function () {
      //   return gantt.$root.querySelector(".gantt_data_area");
      // },
    };

    gantt.ext.zoom.init(zoomConfig);
    gantt.ext.zoom.setLevel("week");

    gantt.init(containerRef.current);

    // gantt.ext.zoom.attachEvent("onAfterZoom", function (level, config) {
    //   var new_position = gantt.posFromDate(left_date);

      
    //   gantt.scrollTo(new_position, null);
    // });

    // gantt chart horizontal scroll START
    let scroll_state, click, original_mouse_position;
    let timeline_area = document.getElementsByClassName("gantt_task_bg")[0];

    timeline_area.onmousedown = (event) => {
      click = true;
      scroll_state = gantt.getScrollState().x;
      original_mouse_position = event.clientX;
    };

    window.onmouseup = function (event) {
      click = false;
    };

    gantt.attachEvent("onMouseMove", function (id, e) {
      var scroll_value = scroll_state + original_mouse_position - e.clientX;
      if (click) {
        gantt.scrollTo(scroll_value, null);
      }
    });
    // gantt chart horizontal scroll END
  });

  var left_date;
  function zoom_in() {
    //this code is good
    var position = gantt.getScrollState().x; 
    left_date = gantt.dateFromPos(position);
    gantt.ext.zoom.zoomIn();
  }
  
  function zoom_out() {
    var position = gantt.getScrollState().x;
    left_date = gantt.dateFromPos(position);
    console.log(position);
    console.log(left_date);
    gantt.ext.zoom.zoomOut();
  }

  return (
    <div>
      <div
        className="formCont"
        id="formCont"
        style={
          modalState.cohortDisplay.display ||
          modalState.addCohortForm.display ||
          modalState.cohortEditForm.display ||
          modalState.courseDisplay.display ||
          modalState.addCourseForm.display ||
          modalState.courseEditForm.display ||
          modalState.confirmDeleteModal.display ||
          holidayModalState
            ? {
                height: "100%",
                backgroundColor: "rgb(236, 238, 255, 0.6)",
                zIndex: "102",
                position: "fixed",
              }
            : {
                backgroundColor: "none",
                zIndex: "101",
              }
        }
      >
        <CourseForm
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setModalState={setModalState}
          setData={setData}
          data={data}
          customAddTask={customAddTask}
        ></CourseForm>
        <CohortForm
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setModalState={setModalState}
          setData={setData}
          data={data}
          customAddTask={customAddTask}
          pullData={pullData}
        ></CohortForm>
        <ConfirmDelete
          modalState={modalState}
          setModalState={setModalState}
          handleModalDisplayState={handleModalDisplayState}
          data={data}
          customDeleteTask={customDeleteTask}
        ></ConfirmDelete>
        <CohortDisplay
          modalState={modalState}
          setModalState={setModalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          data={data}
          exitIcon={exitIcon}
          switchForms={switchForms}
        ></CohortDisplay>
        <CourseDisplay
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          data={data}
          switchForms={switchForms}
        ></CourseDisplay>
        <CohortEdit
          data={data}
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          customEditTask={customEditTask}
        ></CohortEdit>
        <CourseEdit
          data={data}
          modalState={modalState}
          handleModalDisplayState={handleModalDisplayState}
          setData={setData}
          customEditTask={customEditTask}
        ></CourseEdit>
        <HolidayMarkerForm
          // data={data}
          holidayModalState={holidayModalState}
          setHolidayModalState={setHolidayModalState}
          // addHolidayMarker={addHolidayMarker}
        ></HolidayMarkerForm>
      </div>

      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
        id="gantt-chart-container"
      ></div>
      <div id="zoomController">
        <button id="zoomIn" onClick={zoom_in}>
          Zoom In
        </button>
        <button id="zoomOut" onClick={zoom_out}>
          Zoom Out
        </button>
        <button id="addHoliday" onClick={showHolidayModal}>Button</button>
      </div>
      {/* Temporary display home for OverviewDisplay */}
      {/* <OverviewDisplay
        data={data}
      >
      </OverviewDisplay> */}
    </div>
  );
};

export default Gantt;

import React, { useEffect, useRef, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import CourseForm from "../Forms/CourseForm.js";
import CohortForm from "../Forms/CohortForm.js";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";

const Gantt = () => {
  const containerRef = useRef(null);

  const [courseFormDisplay, setCourseFormDisplay] = useState({
    display: false,
    id: 0,
  });

  const [cohortFormDisplay, setCohortFormDisplay] = useState({
    display: false,
    id: 0,
  });

  //variables are for declaring our svg icons. DHTMLX Gantt requires custom icons to be stored as inline html (non JSX) elements
  var plusIconRow =
    "<svg id='plusIconRow' data-action='add' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var plusIconHeader =
    "<svg id='plusIconHeader' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'/></svg>";

  var deleteIcon =
    "<svg id='deleteIcon' data-action='delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'/></svg>";

  var editIcon =
    "<svg id='editIcon' data-action='edit' width='20' height='20' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' xmlnsSvgjs='http://svgjs.com/svgjs'><defs id='SvgjsDefs1002'></defs><g id='SvgjsG1008'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'><path d='M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z' fill='#080000' class='color000 svgShape'></path></svg></g></svg>";

  //state for storing data, currently filled with dummy data
  const [data, setData] = useState({
    data: [
      {
        id: 1,
        text: "Cohort #1",
        start_date: "2019-04-15",
        duration: 3,
        // end_date: "2019-04-19",
        open: true,
        progress: 1,
      },
      {
        id: 5,
        text: "Cohort #1",
        start_date: "2019-04-15",
        duration: 3,
        progress: 1,
        parent: 1,
      },
      {
        id: 3,
        text: "Cohort #2",
        duration: 3,
        start_date: "2019-04-18",
        progress: 1,
      },
      {
        id: 4,
        text: "Cohort #3",
        duration: 3,
        progress: 1,
        start_date: "2019-04-18",
      },
    ],
    // links: [{ id: 1, source: 1, target: 2, type: "0" }],
  });

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

  //when DOM content is loaded, this sets our custom Gantt columns
  document.addEventListener("DOMContentLoaded", (event) => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.init(containerRef.current);
    gantt.parse(data);

    //onclick function for plus icon in header
    document.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.id === "plusIconHeader") {
        setData((prevState) => {
          var copy = { ...prevState };
          copy.data.push({
            id: 4,
            text: "Task #4",
            start_date: "2019-04-18",
            duration: 2,
            progress: 0.4,
          });
          return copy;
        });
      }
    });

    //gantt custom columns
    gantt.config.columns = [
      {
        name: "text",
        label: "Task Name",
        width: "150",
        tree: true,
        resize: true,
      },
      {
        name: "duration",
        label: "Duration",
        align: "center",
      },
      // {
      //   name: "start_date",
      //   label: "Start Date",
      //   align: "center",
      //   resize: true,
      // },
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
        switch (action) {
          case "edit":
            console.log(id);
            break;
          case "add":
            console.log(id);
            setCourseFormDisplay({ display: true, id: id });
            break;
          case "delete":
            console.log(id);
            break;
        }
      }
    });
  });

  return (
    <div>
      <div id="formCont">
        <CourseForm
          setCourseDisplay={setCourseFormDisplay}
          courseDisplay={courseFormDisplay}
          setData={setData}
          data={data}
        ></CourseForm>
        <CohortForm
          cohortFormDisplay={cohortFormDisplay}
          setData={setData}
          data={data}
        ></CohortForm>
        <button
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
      </div>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Gantt;

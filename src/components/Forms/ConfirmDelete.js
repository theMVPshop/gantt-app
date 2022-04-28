import { gantt } from "dhtmlx-gantt";
import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:4000/tasks"


const ConfirmDelete = (props) => {
  // const deleteTask = () => {
  //   let course = props.modalState.confirmDeleteModal.id;
  //   props.deleteTask(course);
  //   resetModal();
  // };
  let id = props.modalState.confirmDeleteModal.id;

  const resetModal = () => {
    props.handleModalDisplayState("confirmDeleteModal", {
      display: false,
      id: "cohort_0",
      title: "",
    });
  };

  return (
    <div
      style={
        props.modalState.confirmDeleteModal.display
          ? { display: "flex" }
          : { display: "none" }
      }
      id="confirmDeleteModal"
    >
      <h1>
        Are you sure you want to delete{" "}
        {props.modalState.confirmDeleteModal.title}?
      </h1>
      <div>
        <button onClick={() => {
        props.customDeleteTask(id)
        resetModal()
        axios.delete(`${url}/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log("there was an error", err))
        // put reset here and finish axios call  
        }}>Yes</button>
        <button onClick={resetModal}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;

import { gantt } from "dhtmlx-gantt";
import React, { useEffect, useState } from "react";

const ConfirmDelete = (props) => {
  const deleteTask = () => {
    let course = props.modalState.confirmDeleteModal.id;
    gantt.deleteTask(course);
    let copy = gantt.serialize();
    console.log(copy);
    resetModal();
  };

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
        <button onClick={deleteTask}>Yes</button>
        <button onClick={resetModal}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;

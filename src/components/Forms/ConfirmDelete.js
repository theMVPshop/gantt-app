import { gantt } from "dhtmlx-gantt";
import React, { useEffect, useState } from "react";

const ConfirmDelete = (props) => {
  const deleteTask = () => {
    console.log(props.confirmDeleteModal.id);
    gantt.deleteTask(props.confirmDeleteModal.id);
    resetModal();
  };

  const resetModal = () => {
    props.setConfirmDeleteModal({
      display: false,
      id: "cohort_0",
      text: "",
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
        {props.modalState.confirmDeleteModal.text}?
      </h1>
      <div>
        <button onClick={deleteTask}>Yes</button>
        <button onClick={resetModal}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;

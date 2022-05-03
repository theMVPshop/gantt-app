import { gantt } from "dhtmlx-gantt";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Forms.css"

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

  const pushFormData = () => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          props.customDeleteTask(id);
          resetModal();
        }
      })
      .catch((err) => console.log("there was an error", err));
  };

  return (
    <div>
      <form
        className="confirmDelete"
        id="confirmDelete"
        style={
          props.modalState.confirmDeleteModal.display
            ? { display: "flex" }
            : { display: "flex" }
            // : { display: "none" }
        }
      
      
      >
        <h1 className="deleteQuestionText">
          Are you sure you want to delete{" "}
          {props.modalState.confirmDeleteModal.title}?
        </h1>
        <div 
          className="deleteButtonsCont" 
          id="deleteButtonsCont">
          <button 
            className="submit deleteYesNoButtons"
            onClick={() => {
            props.customDeleteTask(id)
            resetModal()
            axios.delete(`${url}/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log("there was an error", err))
            // put reset here and finish axios call  
            }}>
            Yes
          </button>
          <button 
            className="submit deleteYesNoButtons" 
            onClick={resetModal}>
              No
          </button>
        </div>
  
        {/* <div>
          <button onClick={pushFormData}>Yes</button>
          <button onClick={resetModal}>No</button>
        </div> */}
      </form>
      
       
    </div>
  );
};

export default ConfirmDelete;

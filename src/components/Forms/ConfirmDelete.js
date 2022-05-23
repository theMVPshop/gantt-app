
import axios from "axios";

import { ReactComponent as Exit } from "../../images/cancel.svg";
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

  return (
    <div 
    style={
      props.modalState.confirmDeleteModal.display
        ? { display: "flex" }
        : { display: "none" }
    }>
      <form
        className="confirmDelete"
        id="confirmDelete"
      >
        <Exit
            className="exit-button"
            onClick={() => {
              console.log(
                "Exit confirmDelete",
                props.modalState.confirmDeleteModal
              );
              props.handleModalDisplayState("confirmDeleteModal", {
                display: false,
              });
            }}
          ></Exit>
        <h1 className="minor-title">
          Are you sure you want to delete{" "}
          {props.modalState.confirmDeleteModal.title}?
        </h1>
        <div 
          className="deleteButtonsCont" 
          id="deleteButtonsCont"
        >
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
            onClick={resetModal}
            type="button"
          >
              No
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDelete;

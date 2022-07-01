import axios from "axios";

import { ReactComponent as Exit } from "../../images/cancel.svg";

const url = "https://gantt-server.herokuapp.com/tasks/";

const ConfirmDelete = (props) => {

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
    >
      <form className="confirmDelete" id="confirmDelete">
        <Exit
          className="exit-button"
          onClick={() => {
            // console.log(
            //   "Exit confirmDelete",
            //   props.modalState.confirmDeleteModal
            // );
            props.handleModalDisplayState("confirmDeleteModal", {
              // display: false,
            });
          }}
        ></Exit>
        <h1 className="minor-title" id="delete-title">
          Are you sure you want to delete{" "}
          <b>{props.modalState.confirmDeleteModal.title}</b>?
        </h1>
        <div className="deleteButtonsCont" id="deleteButtonsCont">
          <button
            className="submit deleteYesNoButtons"
            disabled={props.loading}
            onClick={() => {
              console.log("in yes confirm delete")
              props.fetchData()
              props.customDeleteTask(id);
              
              axios
                .delete(`${url}/${id}`)
                .then((res) => {
                  props.setLoading(false)
                  resetModal();
                  console.log("response in delete: ", res)
                })
                .catch((err) => {
                  props.setLoading(false)
                  console.log("there was an error", err)
                })
            }}
          >
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

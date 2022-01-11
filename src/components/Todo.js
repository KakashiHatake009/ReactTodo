import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalOpen, setModalState] = useState(false);
  console.log(isModalOpen);

  // No Functionality yet just Opens the Modal
  const deleteHandler = function () {
    setModalState(true);
  };

  // Closes the Modal
  const closeModalHandler = function () {
    setModalState(false);
  };
  console.log(props);
  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {isModalOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;

import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const toggleModal = () => {
    props.onModalClicked();
  };

  
  return (
    <div className={props.activeModal ? styles.modal : ''}>
      {props.activeModal && (
        <div className={styles["modal-content"]}>
          <p>You have to complete all the inputs</p>
          <button onClick={toggleModal} className="button">
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;

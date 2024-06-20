import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ modalContent }) => {
  return (
    <>
      <div className="my-modal">{modalContent}</div>
    </>
  );
};

export default Modal;

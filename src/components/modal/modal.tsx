import React, { MouseEvent, ReactChild, ReactChildren } from "react";
import styles from "./modal.module.scss";

function Modal({children, closeModal}:ModalProps) { 
  console.log("Modal init");
  return (
    <>
      <div className={styles.modal}>
        {children}
      </div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </>
  );
}

interface ModalProps {
  children: ReactChild|ReactChildren,
  closeModal: (event: MouseEvent<HTMLElement>) => void,
}

export default Modal;

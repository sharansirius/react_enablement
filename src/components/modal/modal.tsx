import React, { MouseEvent, ReactChild, ReactChildren } from "react";
import styles from "./modal.module.scss";
import { useSpring, animated, config } from 'react-spring'

function Modal({ children, closeModal }: ModalProps) {
  console.log("Modal init");
  const fadeStyles = useSpring({
    config: { duration: 300, ...config.stiff},
    from: { opacity: 0 },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div style={fadeStyles}>    
      <div className={styles.modal}>{children}</div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </animated.div>
  );
}

interface ModalProps {
  children: ReactChild | ReactChildren;
  closeModal: (event: MouseEvent<HTMLElement>) => void;
}

export default Modal;

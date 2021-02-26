import React, {MouseEvent, ReactChild, ReactChildren} from "react";
import styles from "./button.module.scss";

function Button({ onClick, classSelector = "", children }:ButtonProps) {
  console.log("Button Init");
  return (
    <button className={`${styles.button} ${styles[classSelector]}`} onClick={onClick}>
      {children}
    </button>
  );
}

interface ButtonProps {
  onClick:(event: MouseEvent<HTMLButtonElement>) => void,
  classSelector?: string,
  children?: ReactChild | ReactChildren | Array<ReactChild> | Array<ReactChildren>,
}


export default Button;

import React, { MouseEvent } from "react";
import styles from "./button.module.scss";

function Button({ label, onClick, classSelector }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[classSelector]}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  classSelector: string;
  label: string;
}

export default Button;

import styles from "./input.module.scss";
import React, { ChangeEvent, KeyboardEvent } from "react";

function Input({
  type,
  placeholder,
  value,
  autofocus = false,
  onChange,
  classSelector = "",
  name,
  checked,
  onkeypress,
  label,
}: InputProp) {
  console.log("Input Init");
  return (
    <>
      <input
        placeholder={placeholder}
        value={value}
        autoFocus={autofocus}
        type={type}
        name={name}
        className={`${styles.input} ${styles[classSelector]}`}
        onChange={onChange}
        checked={checked}
        onKeyPress={onkeypress}
      />
      {label ? <label htmlFor={name}>{label}</label> : ""}
    </>
  );
}

interface InputProp {
  type: string;
  placeholder?: string;
  value: string;
  label?: string;
  autofocus?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  classSelector?: string;
  name: string;
  checked?: boolean;
  onkeypress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default Input;

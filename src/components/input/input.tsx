import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./input.module.scss";

function Input({
  type,
  placeholder,
  value,
  onChange,
  classSelector = "normal",
  name,
  checked,
  onkeypress,
  label,
}: InputProp) {
  return (
    <>
      {label ? (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      ) : (
        " "
      )}
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        className={`${styles.input} ${styles[classSelector]}`}
        onChange={onChange}
        checked={checked}
        onKeyPress={onkeypress}
      />
    </>
  );
}

interface InputProp {
  type: string;
  placeholder?: string;
  value: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  classSelector?: string;
  name: string;
  checked?: boolean;
  onkeypress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

Input.defaultProps = {
  placeholder: "",
  classSelector: "normal",
  checked: false,
  label: "",
  onkeypress: () => {},
  onChange: () => {},
};
export default Input;

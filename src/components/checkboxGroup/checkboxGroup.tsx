import styles from "./checkboxGroup.module.scss";
import React from "react-redux";
import { Input } from "../";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent } from "react";

function CheckboxGroup({ list, onChange }: CheckboxGroupProps) {
  console.log("CheckboxGroup Init");
  return (
    <div className={styles.checkboxGroup}>
      {
        list.map((item: Filter) => (
          <div key={uuidv4()}>
            <Input
            type="checkbox"
            value={item.name}
            name={item.name}
            label={item.name}
            checked={item.checked}
            onChange={onChange}/>            
          </div>
        ))
      }
    </div>
  );
}

interface CheckboxGroupProps {
  list: Array<Filter>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default CheckboxGroup;

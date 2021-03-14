import styles from "./filter.module.scss";
import React from "react";
import { Input } from "..";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateFilter } from "../../redux";

function Filter({ item, index }: FilterProps) {
  console.log("Filter Init");
  const dispatch: Dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch(
      updateFilter({
        filter: { ...item, ...{ checked: !item.checked } },
        index: index,
      })
    );
  };
  return (
    <div className={styles.filter}>
      <Input
        type="checkbox"
        value={item.name}
        name={item.name}
        label={item.name}
        checked={item.checked}
        onChange={onChangeHandler}
      />
    </div>
  );
}

interface FilterProps {
  item: Filter;
  index: number;
}
export default Filter;

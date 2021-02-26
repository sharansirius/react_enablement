import React from "react";
import styles from "./filters.module.scss";
import { CheckboxGroup } from "../";
import { useSelector } from "react-redux";

function Filters() {
  console.log("Filters Init");
  const filters = useSelector((state: BlogAppStore) => state.filters);
  const updateFilter = (e:any) => {console.log(e)}
  return (
    <div className={styles.filters}>
      <h3>Filters</h3>
      <CheckboxGroup list={filters} onChange={updateFilter}/>      
    </div>
  );
}

// interface FiltersProps {
//   children: ReactChild | ReactChildren,
//   width: string
// }

export default Filters;

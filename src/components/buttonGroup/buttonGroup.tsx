import React from "react";
import styles from "./buttonGroup.module.scss";
import { setTheme } from "../../actions";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";

function ButtonGroup() {
  console.log("ButtonGroup init");

  const dispatch: Dispatch = useDispatch();
  const theme = useSelector((state: BlogAppStore) => state.theme);
  const toogleTo:string = ( theme === "dark") ? "light" : "dark";
  const toggleTheme = () => {
    dispatch(setTheme(toogleTo));
  }

  return (
    <div className={styles.buttonGroup}>
      <Button onClick={()=> alert("")}> View Members </Button>
      <Button onClick={toggleTheme}> Switch to {toogleTo} theme</Button>
    </div>
  );
}

export default ButtonGroup;

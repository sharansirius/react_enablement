import React, { useState } from "react";
import styles from "./buttonGroup.module.scss";
import { setTheme } from "../../redux";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Button, MembersList } from "../../components";

function ButtonGroup() {
  console.log("ButtonGroup init");
  const[showMembers, setShowMembers] = useState(false);
  const dispatch: Dispatch = useDispatch();
  const theme = useSelector((state: BlogAppStore) => state.theme);
  const toogleTo:string = ( theme === "dark") ? "light" : "dark";
  const toggleTheme = () => {
    dispatch(setTheme(toogleTo));
  }

  return (
    <div className={styles.buttonGroup}>
      <Button classSelector="full" onClick={()=> setShowMembers(true)}> View Members </Button>
      <Button classSelector="full" onClick={toggleTheme}> Switch to {toogleTo} theme</Button>
      {showMembers && <MembersList clickToHide={()=>setShowMembers(false)}/>}
    </div>
  );
}

export default ButtonGroup;

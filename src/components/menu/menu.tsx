import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

function Menu() {
  console.log("Menu init");
  return (
    <div className={styles.menu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/nowShowing">Now Showing</NavLink>
    </div>
  );
}

export default Menu;

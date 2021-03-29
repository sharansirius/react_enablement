import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

function Menu() {
  // console.log("Menu init");
  const userAuth = useSelector((state: CineStore) => state.auth);
  return (
    <div className={styles.menu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {userAuth?.isLoggedIn ? (
        <NavLink to="/nowShowing">Now Showing</NavLink>
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;

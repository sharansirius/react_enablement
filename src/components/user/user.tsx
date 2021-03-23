import React from "react";
import styles from "./user.module.scss";

function User() {
  return (
    <>
      <h5 className={styles.user}>Hi, Sharan | Logout</h5>
      <h5 className={styles.user}>Login</h5>
    </>
  );
}

export default User;

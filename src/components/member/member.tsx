import React from "react";
import styles from "./member.module.scss";

function Member({data}: any) { 
  console.log("Member init");
  return (
    <div className={styles.member}>
      <img src={data?.photo} alt={data?.name}/>
      <p>{data?.name}</p>
      <p>{data?.username}</p>
    </div>
  );
}


export default Member;

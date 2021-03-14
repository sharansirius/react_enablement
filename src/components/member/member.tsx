import React from "react";
import styles from "./member.module.scss";
import { NO_IMAGE_FOUND_SQUARE_PATH } from "../../constants/appConstants";

function Member({data}:MemberProp) {
  console.log("Member init");
  return (
    <div className={styles.member}>
      <img src={data?.photo || NO_IMAGE_FOUND_SQUARE_PATH} alt={data?.name} />
      <p>{data?.name}</p>
      <p>{data?.username}</p>
    </div>
  );
}

interface MemberProp {
  data: Member;
}

export default Member;

import React, {ReactChild, ReactChildren} from "react";
import styles from "./card.module.scss";

function Card({children,width}:CardProps) {
  console.log("Card init");
  return (
    <div className={styles.card} style={{width: `${width}%`}}>
      {children}
    </div>
  );
}

interface CardProps {
  children: ReactChild | ReactChildren,
  width: string
}

export default Card;

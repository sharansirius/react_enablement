import React, {ReactChild, ReactChildren} from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: ReactChild | ReactChildren,
  width: string
}

function Card({children,width}:CardProps) {
  return (
    <div className={styles.card} style={{width: `${width}%`}}>
      {children}
    </div>
  );
}

export default Card;

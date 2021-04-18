/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent } from "react";
import styles from "./language.module.scss";

function Language({ literal, onClick }: LanguageProps) {
  return (
    <div className={styles.language} onClick={onClick}>
      {literal[1]}
    </div>
  );
}

interface LanguageProps {
  literal: [string, string];
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export default Language;

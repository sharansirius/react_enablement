import React from "react";
import styles from "./errorFallback.module.scss";

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div className={styles.errorFallback}>
      <p>Sorry :( better luck next time {error.message}</p>
    </div>
  );
}

interface ErrorFallbackProps {
  error: Error;
}

export default ErrorFallback;

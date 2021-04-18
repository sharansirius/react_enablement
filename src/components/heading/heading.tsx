import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./heading.module.scss";

function Heading({ classSelector, label, intlKey }: HeadingProps) {
  return (
    <h2 className={`${styles.heading} ${styles[classSelector]}`}>
      {intlKey ? (
        <FormattedMessage id={intlKey} defaultMessage="Heading" />
      ) : (
        <>{label}</>
      )}
    </h2>
  );
}

interface HeadingProps {
  classSelector: string;
  label?: string;
  intlKey?: string;
}

Heading.defaultProps = {
  intlKey: "",
  label: "",
};

export default Heading;

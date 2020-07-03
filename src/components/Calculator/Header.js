import React from "react";

import styles from "./Calculator.module.scss";

const Header = ({ values }) => {
  const [currentValue, history, previousOperation] = values;

  const formatNumbers = (string) => (string ? string.toString().replace(/\./g, ",") : "");

  const result = formatNumbers(currentValue);
  const headerHistory = formatNumbers(history + " " + previousOperation);

  return (
    <div className={styles.header}>
      <span className={styles.history}>{headerHistory}</span>
      <span className={styles.result}>{result}</span>
    </div>
  );
};

export default Header;

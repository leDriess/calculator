import React from "react";
import cx from "classnames";

import styles from "./Calculator.module.scss";

const Button = ({ styleClass, children, click }) => {
  return (
    <button type="button" className={cx(styles.btn, styleClass)} onClick={click}>
      {children}
    </button>
  );
};

export default Button;

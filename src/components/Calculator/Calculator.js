import React, { useReducer } from "react";

import Header from "./Header";
import Numpad from "./Numpad";

import { initialState } from "./reducer/initialState";
import { calculatorReducer } from "./reducer/calculatorReducer";

import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [{ currentValue, history, previousOperation }, dispatch] = useReducer(
    calculatorReducer,
    initialState
  );

  return (
    <div className={styles.calculator}>
      <Header values={[currentValue, history, previousOperation]} />
      <Numpad dispatch={dispatch} />
    </div>
  );
};

export default Calculator;

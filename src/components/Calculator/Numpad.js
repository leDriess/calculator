import React from "react";
import cx from "classnames";

import Button from "./Button";

import { actionTypes } from "./reducer/actionTypes";

import styles from "./Calculator.module.scss";

const Numpad = ({ dispatch }) => {
  const clear = () => {
    dispatch({ type: actionTypes.CLEAR });
  };

  const handleNumbers = (number) => {
    dispatch({ type: actionTypes.INSERT_NUMBER, number });
  };

  const handleDecimal = () => {
    dispatch({ type: actionTypes.DECIMAL });
  };

  const handlePercent = () => {
    dispatch({ type: actionTypes.PERCENT });
  };

  const handleAlterSign = () => {
    dispatch({ type: actionTypes.ALTER_SIGN });
  };

  const handleMathOperator = (operator) => {
    dispatch({ type: actionTypes.MATH_OP, operator });
  };

  return (
    <div className={styles.numpad}>
      <Button click={handlePercent}>%</Button>
      <Button click={handleAlterSign}>+ / -</Button>
      <Button click={clear}>C</Button>
      <Button
        styleClass={cx(styles.operator, styles.divide)}
        click={() => {
          handleMathOperator("/");
        }}
      >
        /
      </Button>

      <Button click={() => handleNumbers("7")}>7</Button>
      <Button click={() => handleNumbers("8")}>8</Button>
      <Button click={() => handleNumbers("9")}>9</Button>
      <Button
        styleClass={cx(styles.operator, styles.multiply)}
        click={() => {
          handleMathOperator("*");
        }}
      >
        x
      </Button>

      <Button click={() => handleNumbers("4")}>4</Button>
      <Button click={() => handleNumbers("5")}>5</Button>
      <Button click={() => handleNumbers("6")}>6</Button>
      <Button
        styleClass={cx(styles.operator, styles.minus)}
        click={() => {
          handleMathOperator("-");
        }}
      >
        -
      </Button>

      <Button click={() => handleNumbers("1")}>1</Button>
      <Button click={() => handleNumbers("2")}>2</Button>
      <Button click={() => handleNumbers("3")}>3</Button>
      <Button
        styleClass={cx(styles.operator, styles.plus)}
        click={() => {
          handleMathOperator("+");
        }}
      >
        +
      </Button>

      <Button click={() => handleNumbers(0)}>0</Button>
      <Button click={handleDecimal}>,</Button>

      <Button
        styleClass={cx(styles.operator, styles.equals)}
        click={() => {
          handleMathOperator("=");
        }}
      >
        =
      </Button>
    </div>
  );
};

export default Numpad;

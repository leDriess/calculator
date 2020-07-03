import { actionTypes } from "./actionTypes";
import { operators, calculate } from "./utils";

export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ALTER_SIGN: {
      const value = state.currentValue === 0 ? 0 : state.currentValue * -1;
      return { ...state, currentValue: value.toString(), lastKeyType: "number" };
    }

    case actionTypes.CLEAR:
      return { ...state, currentValue: "0", previousOperation: "", history: "", lastKeyType: "" };

    case actionTypes.DECIMAL:
      let value = state.currentValue.toString();
      return { ...state, currentValue: value + "." };

    case actionTypes.MATH_OP: {
      const history =
        state.history === ""
          ? state.currentValue
          : `${state.history} ${state.previousOperation} ${state.currentValue}`;

      const calculatedValue = calculate(history);
      if (action.operator === "=" && state.previousOperation !== "=") {
        return {
          ...state,
          currentValue: calculatedValue.toString(),
          history,
          lastKeyType: action.operator,
          previousOperation: action.operator,
        };
      }

      if (state.previousOperation === "=")
        return {
          ...state,
          history: state.currentValue,
          lastKeyType: action.operator,
          previousOperation: action.operator,
        };

      return {
        ...state,
        currentValue: calculatedValue,
        history,
        lastKeyType: action.operator,
        previousOperation: action.operator,
      };
    }

    case actionTypes.PERCENT: {
      const percentValue = state.currentValue * 0.01;
      return { ...state, currentValue: percentValue.toString() };
    }

    case actionTypes.INSERT_NUMBER:
      const newCurrentValue =
        state.currentValue === "0" || operators.includes(state.lastKeyType)
          ? action.number.toString()
          : state.currentValue + action.number.toString();

      return { ...state, currentValue: newCurrentValue, lastKeyType: "number" };

    default:
      return state;
  }
};
